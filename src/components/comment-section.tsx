'use client';

import { useState } from 'react';
import { MessageCircle, Send, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import type { Comment } from '@/lib/articles';

interface CommentSectionProps {
  articleId: string;
  comments: Comment[];
  lang: string;
}

export function CommentSection({ articleId, comments: initialComments, lang }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isEn = lang === 'en';

  const t = {
    comments: isEn ? 'Comments' : '评论',
    noComments: isEn ? 'No comments yet. Be the first to comment!' : '暂无评论，快来抢沙发吧！',
    leaveComment: isEn ? 'Leave a Comment' : '发表评论',
    yourName: isEn ? 'Your Name' : '您的姓名',
    yourEmail: isEn ? 'Your Email' : '您的邮箱',
    yourComment: isEn ? 'Your Comment' : '评论内容',
    submit: isEn ? 'Submit Comment' : '提交评论',
    submitting: isEn ? 'Submitting...' : '提交中...',
    successMessage: isEn ? 'Comment submitted successfully! It will be visible after moderation.' : '评论提交成功！审核后将显示。',
    errorMessage: isEn ? 'Failed to submit comment. Please try again.' : '提交失败，请重试。',
    namePlaceholder: isEn ? 'Enter your name' : '请输入姓名',
    emailPlaceholder: isEn ? 'Enter your email' : '请输入邮箱',
    commentPlaceholder: isEn ? 'Write your comment here...' : '请输入评论内容...',
    required: isEn ? 'Required' : '必填',
    ago: isEn ? 'ago' : '前',
  };

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} ${isEn ? 'minutes' : '分钟'}${t.ago}`;
    } else if (diffHours < 24) {
      return `${diffHours} ${isEn ? 'hours' : '小时'}${t.ago}`;
    } else {
      return `${diffDays} ${isEn ? 'days' : '天'}${t.ago}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name.trim() || !email.trim() || !content.trim()) {
      setError(isEn ? 'Please fill in all required fields.' : '请填写所有必填项。');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId,
          name: name.trim(),
          email: email.trim(),
          content: content.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setContent('');
        // Add the new comment to the list (pending approval)
        const newComment: Comment = {
          id: data.commentId || Date.now().toString(),
          articleId,
          name: name.trim(),
          email: email.trim(),
          content: content.trim(),
          createdAt: new Date().toISOString(),
          approved: false,
        };
        setComments([...comments, newComment]);
      } else {
        setError(data.error || t.errorMessage);
      }
    } catch {
      setError(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Existing Comments */}
      {comments.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>{t.noComments}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className={comment.approved ? '' : 'opacity-60'}>
              <CardContent className="py-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{comment.name}</span>
                      {!comment.approved && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                          {isEn ? 'Pending' : '待审核'}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTimeAgo(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{comment.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-8 pt-6 border-t">
        <h3 className="text-lg font-semibold">{t.leaveComment}</h3>
        
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            {t.successMessage}
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">
              {t.yourName} <span className="text-red-500">*</span>
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">
              {t.yourEmail} <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              required
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">
            {t.yourComment} <span className="text-red-500">*</span>
          </label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t.commentPlaceholder}
            rows={4}
            required
          />
        </div>
        
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              {t.submitting}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {t.submit}
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
