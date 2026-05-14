"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w\.-]+@[\w\.-]+\.\w{2,4}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Format the message for WhatsApp
        const whatsappMessage = `*New Contact Form Submission from SS Interiorshub Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}%0A%0A_This message was sent via the contact form on SS Interiorshub website._`;
        
        // Create WhatsApp URL with the phone number
        const whatsappNumber = '9990447773';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Also send email as backup (optional)
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          if (!response.ok) {
            console.error('Email backup failed, but WhatsApp message was sent');
          }
        } catch (emailError) {
          console.error('Email backup error:', emailError);
          // Continue anyway since WhatsApp was successful
        }
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
        
      } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
        
        // Hide error message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="contact-section pt-150 pb-110 fade-wrapper tl-bg-color">
      <div className="container">
        <div className="row section-heading-wrap">
          <div className="shape">
            <img src="assets/img/shapes/section-heading.png" alt="shape" />
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="section-heading section-heading-2 mb-0">
              <h2 className="section-title cursor-effect">Let's Discuss <span>Your Next</span> Project</h2>
              <p className="mb-0">Reach out to our team of experts to start planning your dream space. Fill the form below to send us a WhatsApp message.</p>
            </div>
          </div>
        </div>

        <div className="row gy-5">
          {/* suppressHydrationWarning prevents mismatch errors from animation libraries (e.g. GSAP) that inject inline styles before React hydrates */}
          <div className="col-lg-6 slide-anim" data-offset="100" data-direction="left" suppressHydrationWarning>
            <style>{`
              .custom-contact-form .form-group {
                margin-bottom: 25px;
              }
              .custom-contact-form .form-control {
                background-color: #f5f5f5;
                border: 1px solid #eee;
                border-radius: 0;
                padding: 18px 25px;
                font-size: 16px;
                color: #333;
                width: 100%;
                transition: all 0.3s ease;
              }
              .custom-contact-form .form-control:focus {
                border-color: #333;
                background-color: #fff;
                outline: none;
              }
              .custom-contact-form textarea.form-control {
                min-height: 150px;
                resize: vertical;
              }
              .custom-contact-btn {
                background-color: #1a1a1a;
                color: #ffffff;
                padding: 18px 45px;
                font-size: 16px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: none;
                transition: all 0.3s ease;
                cursor: pointer;
              }
              .custom-contact-btn:hover {
                background-color: #333333;
                color: #ffffff;
              }
              .custom-contact-btn:disabled {
                opacity: 0.7;
                cursor: not-allowed;
              }
            `}</style>
            <div className="contact-form-wrap">
              <form onSubmit={handleSubmit} className="custom-contact-form">
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Your Name" 
                  />
                  {errors.name && <span style={{ color: '#ff4d4d', fontSize: '14px', marginTop: '5px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Your Email" 
                  />
                  {errors.email && <span style={{ color: '#ff4d4d', fontSize: '14px', marginTop: '5px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Subject" 
                  />
                  {errors.subject && <span style={{ color: '#ff4d4d', fontSize: '14px', marginTop: '5px', display: 'block' }}>{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Your Message" 
                  ></textarea>
                  {errors.message && <span style={{ color: '#ff4d4d', fontSize: '14px', marginTop: '5px', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="custom-contact-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-3" style={{ background: '#f8fff8', borderLeft: '4px solid #28a745', color: '#28a745' }}>
                    <strong>Success!</strong> WhatsApp is opening with your message. Please send it to +91 9990447773. We'll respond shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-3" style={{ background: '#fff8f8', borderLeft: '4px solid #dc3545', color: '#dc3545' }}>
                    <strong>Error!</strong> Failed to process your message. Please try again or contact us directly at +91 9990447773.
                  </div>
                )}

                <div className="mt-4 text-center">
                  <p className="mb-3">For more information or to visit our office:</p>
                  <a href="/contact" className="tl-primary-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    Visit Contact Page
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* suppressHydrationWarning prevents mismatch errors from animation libraries (e.g. GSAP) that inject inline styles before React hydrates */}
          <div className="col-lg-6 slide-anim" data-offset="100" data-direction="right" suppressHydrationWarning>
            <div className="map-wrapper h-100" style={{ borderRadius: '10px', overflow: 'hidden', minHeight: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.112247200978!2d77.4528899759961!3d28.62862007567019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0e2c7e8c5f%3A0x4b6b5c5c5c5c5c5c!2sLGF-25%20Ajnara%20Arcade%2C%20Crossings%20Republik%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201016!5e0!3m2!1sen!2sin!4v1715621234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SS Interiorshub Location - Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}