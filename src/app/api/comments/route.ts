import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for comments (in production, use a database)
// This will reset on server restart, but works for demonstration
const commentsStore: Array<{
  id: string;
  articleId: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { articleId, name, email, content } = body;

    // Validate required fields
    if (!articleId || !name || !email || !content) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate content length
    if (content.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Comment must be at least 10 characters' },
        { status: 400 }
      );
    }

    if (content.length > 1000) {
      return NextResponse.json(
        { success: false, error: 'Comment must be less than 1000 characters' },
        { status: 400 }
      );
    }

    // Create new comment
    const newComment = {
      id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      articleId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
      approved: false, // Comments require moderation
    };

    // Store comment
    commentsStore.push(newComment);

    console.log(`New comment submitted for article ${articleId} by ${name}`);

    return NextResponse.json({
      success: true,
      commentId: newComment.id,
      message: 'Comment submitted successfully. It will be visible after moderation.',
    });
  } catch (error) {
    console.error('Error submitting comment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit comment' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('articleId');

    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'Article ID is required' },
        { status: 400 }
      );
    }

    // Return only approved comments for the article
    const approvedComments = commentsStore.filter(
      (c) => c.articleId === articleId && c.approved
    );

    return NextResponse.json({
      success: true,
      comments: approvedComments,
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}
