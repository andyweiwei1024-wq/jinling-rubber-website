'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n/client';

export function InquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { lang } = useI18n();

  // 表单数据
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });

  // 判断是否在工作时间（周一至周五 10:00-17:00 北京时间）
  const [isWorkingHours, setIsWorkingHours] = useState(false);
  
  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date();
      const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
      const hour = beijingTime.getHours();
      const day = beijingTime.getDay();
      
      // 周一至周五（1-5），10:00-17:00
      setIsWorkingHours(day >= 1 && day <= 5 && hour >= 10 && hour < 17);
    };
    
    checkWorkingHours();
    // 每分钟检查一次
    const interval = setInterval(checkWorkingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // 发送到API
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // 3秒后关闭
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 多语言文本
  const texts = {
    en: {
      buttonText: 'Get a Quote',
      workingHours: 'Online',
      offline: 'Leave Message',
      title: 'Send Inquiry',
      subtitle: 'We will reply within 24 hours',
      workingNow: 'We are online now!',
      offlineNote: 'We are currently offline. Leave a message and we\'ll reply within 24 hours.',
      name: 'Your Name *',
      email: 'Email Address *',
      company: 'Company Name',
      phone: 'Phone / WhatsApp',
      product: 'Interested Product',
      selectProduct: 'Select a product category...',
      protectiveSuits: 'Protective Suits',
      rainwear: 'Rainwear',
      workwear: 'Workwear',
      customOrder: 'Custom Order',
      message: 'Your Message *',
      messagePlaceholder: 'Please describe your requirements...',
      submit: 'Send Inquiry',
      sending: 'Sending...',
      success: 'Thank you! We\'ll reply within 24 hours.',
      workHours: 'Work Hours: Mon-Fri 10:00-17:00 (Beijing Time)',
      response: 'Response within 24 hours',
    },
    zh: {
      buttonText: '获取报价',
      workingHours: '在线',
      offline: '留言咨询',
      title: '发送询盘',
      subtitle: '我们将在24小时内回复',
      workingNow: '我们正在线！',
      offlineNote: '当前非工作时间，请留言，我们将在24小时内回复您。',
      name: '您的姓名 *',
      email: '邮箱地址 *',
      company: '公司名称',
      phone: '电话 / WhatsApp',
      product: '感兴趣的产品',
      selectProduct: '选择产品类别...',
      protectiveSuits: '防护服系列',
      rainwear: '雨衣系列',
      workwear: '工装系列',
      customOrder: '定制订单',
      message: '您的需求 *',
      messagePlaceholder: '请描述您的具体需求...',
      submit: '发送询盘',
      sending: '发送中...',
      success: '感谢您的咨询！我们将在24小时内回复。',
      workHours: '工作时间：周一至周五 10:00-17:00（北京时间）',
      response: '24小时内回复',
    },
    ar: {
      buttonText: 'طلب عرض سعر',
      workingHours: 'متصل',
      offline: 'اترك رسالة',
      title: 'إرسال استفسار',
      subtitle: 'سنرد خلال 24 ساعة',
      workingNow: 'نحن متصلون الآن!',
      offlineNote: 'نحن حالياً غير متصلين. اترك رسالة وسنرد خلال 24 ساعة.',
      name: 'الاسم *',
      email: 'البريد الإلكتروني *',
      company: 'اسم الشركة',
      phone: 'الهاتف / واتساب',
      product: 'المنتج المطلوب',
      selectProduct: 'اختر فئة المنتج...',
      protectiveSuits: 'بدلات واقية',
      rainwear: 'ملفات مطرية',
      workwear: 'ملابس عمل',
      customOrder: 'طلب مخصص',
      message: 'رسالتك *',
      messagePlaceholder: 'يرجى وصف متطلباتك...',
      submit: 'إرسال الاستفسار',
      sending: 'جاري الإرسال...',
      success: 'شكراً لك! سنرد خلال 24 ساعة.',
      workHours: 'ساعات العمل: الإثنين-الجمعة 10:00-17:00 (بتوقيت بكين)',
      response: 'رد خلال 24 ساعة',
    },
    de: {
      buttonText: 'Angebot anfordern',
      workingHours: 'Online',
      offline: 'Nachricht',
      title: 'Anfrage senden',
      subtitle: 'Wir antworten innerhalb von 24 Stunden',
      workingNow: 'Wir sind online!',
      offlineNote: 'Wir sind derzeit offline. Hinterlassen Sie eine Nachricht und wir antworten innerhalb von 24 Stunden.',
      name: 'Ihr Name *',
      email: 'E-Mail-Adresse *',
      company: 'Firmenname',
      phone: 'Telefon / WhatsApp',
      product: 'Interessiertes Produkt',
      selectProduct: 'Produktkategorie auswählen...',
      protectiveSuits: 'Schutzanzüge',
      rainwear: 'Regenkleidung',
      workwear: 'Arbeitskleidung',
      customOrder: 'Sonderanfertigung',
      message: 'Ihre Nachricht *',
      messagePlaceholder: 'Bitte beschreiben Sie Ihre Anforderungen...',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet...',
      success: 'Vielen Dank! Wir antworten innerhalb von 24 Stunden.',
      workHours: 'Arbeitszeiten: Mo-Fr 10:00-17:00 (Peking-Zeit)',
      response: 'Antwort innerhalb von 24 Stunden',
    },
    es: {
      buttonText: 'Solicitar cotización',
      workingHours: 'En línea',
      offline: 'Dejar mensaje',
      title: 'Enviar consulta',
      subtitle: 'Responderemos en 24 horas',
      workingNow: '¡Estamos en línea!',
      offlineNote: 'Actualmente estamos fuera de línea. Deje un mensaje y responderemos en 24 horas.',
      name: 'Su nombre *',
      email: 'Correo electrónico *',
      company: 'Nombre de la empresa',
      phone: 'Teléfono / WhatsApp',
      product: 'Producto de interés',
      selectProduct: 'Seleccionar categoría...',
      protectiveSuits: 'Trajes protectores',
      rainwear: 'Ropa de lluvia',
      workwear: 'Ropa de trabajo',
      customOrder: 'Pedido personalizado',
      message: 'Su mensaje *',
      messagePlaceholder: 'Por favor describa sus requerimientos...',
      submit: 'Enviar consulta',
      sending: 'Enviando...',
      success: '¡Gracias! Responderemos en 24 horas.',
      workHours: 'Horario: Lun-Vie 10:00-17:00 (Hora de Pekín)',
      response: 'Respuesta en 24 horas',
    },
  };

  const currentText = texts[lang as keyof typeof texts] || texts.en;

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        {/* 状态指示灯 */}
        <span className={`relative flex h-3 w-3`}>
          <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isWorkingHours ? 'bg-green-300 animate-ping' : 'bg-gray-300'}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isWorkingHours ? 'bg-green-400' : 'bg-gray-400'}`}></span>
        </span>
        <span className="font-medium">{currentText.buttonText}</span>
        {/* 响应时间提示 */}
        <span className="absolute -top-8 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {currentText.response}
        </span>
      </button>

      {/* 弹窗表单 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{currentText.title}</h3>
                  <p className="text-orange-100 text-sm mt-1">{currentText.subtitle}</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* 工作状态提示 */}
              <div className={`mt-4 p-3 rounded-lg ${isWorkingHours ? 'bg-green-500/20' : 'bg-white/10'}`}>
                <p className="text-sm flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isWorkingHours ? 'bg-green-300' : 'bg-gray-300'}`}></span>
                  {isWorkingHours ? currentText.workingNow : currentText.offlineNote}
                </p>
              </div>
            </div>

            {/* 表单内容 */}
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{currentText.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* 姓名 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 邮箱 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 公司 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.company}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 电话 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                {/* 产品选择 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.product}</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">{currentText.selectProduct}</option>
                    <option value="protective-suits">{currentText.protectiveSuits}</option>
                    <option value="rainwear">{currentText.rainwear}</option>
                    <option value="workwear">{currentText.workwear}</option>
                    <option value="custom">{currentText.customOrder}</option>
                  </select>
                </div>

                {/* 留言 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.message}</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={currentText.messagePlaceholder}
                  />
                </div>

                {/* 提交按钮 */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50"
                >
                  {isLoading ? currentText.sending : currentText.submit}
                </button>

                {/* 工作时间提示 */}
                <p className="text-xs text-gray-500 text-center">
                  🕐 {currentText.workHours}
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
