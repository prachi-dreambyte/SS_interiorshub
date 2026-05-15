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
        const whatsappMessage = `*New Contact Form Submission from SS Interiorshub Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}\n\n_This message was sent via the contact form on SS Interiorshub website._`;
        
        // Create WhatsApp URL with the phone number (include country code 91 for India)
        // WhatsApp requires: country code + phone number without + sign
        // Example: Indian number +91 9990447773 becomes 919990447773
        const whatsappNumber = '919990447773'; // Country code +91, remove the + sign
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
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
          
          const result = await response.json();
          
          if (!response.ok) {
            console.error('Email backup failed:', result.error);
          } else {
            console.log('Email backup status:', result.message);
            if (result.warning) {
              console.warn('Email configuration warning:', result.warning);
            }
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
                background-color: #fff;
                border: 1px solid #eee;
                border-radius: 8px;
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
                box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
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
                border-radius: 8px;
                transition: all 0.3s ease;
                cursor: pointer;
                width: 100%;
              }
              .custom-contact-btn:hover {
                background-color: #333333;
                color: #ffffff;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              }
              .custom-contact-btn:disabled {
                opacity: 0.7;
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
              }
              .error-message {
                color: #ff4d4d;
                font-size: 14px;
                margin-top: 5px;
                display: block;
              }
              .status-message {
                margin-top: 20px;
                padding: 15px;
                border-radius: 8px;
                font-size: 14px;
              }
              .success-message {
                background: #f8fff8;
                border-left: 4px solid #28a745;
                color: #28a745;
              }
              .error-message-box {
                background: #fff8f8;
                border-left: 4px solid #dc3545;
                color: #dc3545;
              }
              .info-message {
                background: #f0f8ff;
                border-left: 4px solid #007bff;
                color: #007bff;
              }
              .contact-icon {
                font-size: 24px;
                color: #1a1a1a;
                margin-bottom: 15px;
                display: inline-block;
                transition: color 0.3s ease;
              }
              .contact-icon:hover {
                color: #333333;
              }
              .contact-info-card {
                text-align: center;
                padding: 30px 20px;
                border-radius: 10px;
                background: #f9f9f9;
                margin-bottom: 30px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              .contact-info-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              }
              .contact-info-card .contact-icon {
                font-size: 40px;
                margin-bottom: 20px;
                color: #1a1a1a;
              }
              .contact-info-card .contact-info-title {
                font-size: 20px;
                margin-bottom: 15px;
                color: #333;
              }
              .contact-info-card .contact-info-text {
                color: #666;
                margin-bottom: 20px;
                line-height: 1.6;
              }
              .contact-info-card .contact-info-link {
                color: #1a1a1a;
                text-decoration: none;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: color 0.3s ease;
              }
              .contact-info-card .contact-info-link:hover {
                color: #333333;
              }
              .contact-info-card .contact-info-link i {
                font-size: 14px;
              }
              
              /* Responsive styles */
              @media (max-width: 768px) {
                .custom-contact-form .form-control {
                  padding: 15px 20px;
                  font-size: 15px;
                }
                .custom-contact-btn {
                  padding: 16px 30px;
                  font-size: 15px;
                }
                .contact-info-card {
                  padding: 25px 15px;
                  margin-bottom: 20px;
                }
                .contact-info-card .contact-icon {
                  font-size: 32px;
                }
                .contact-info-card .contact-info-title {
                  font-size: 18px;
                }
              }
              @media (max-width: 576px) {
                .custom-contact-form .form-control {
                  padding: 12px 15px;
                  font-size: 14px;
                }
                .custom-contact-btn {
                  padding: 14px 20px;
                  font-size: 14px;
                }
                .contact-info-card {
                  padding: 20px 15px;
                }
                .contact-info-card .contact-icon {
                  font-size: 28px;
                }
                .contact-info-card .contact-info-title {
                  font-size: 16px;
                }
              }
            `}</style>
            
            {/* Contact Info Cards for Mobile */}
            <div className="d-lg-none mb-5">
              <div className="row gy-4">
              </div>
            </div>

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
                  {errors.name && <span className="error-message">{errors.name}</span>}
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
                  {errors.email && <span className="error-message">{errors.email}</span>}
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
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Your Message" 
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="custom-contact-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                </button>

                {submitStatus === 'success' && (
                  <div className="status-message success-message">
                    <strong>Success!</strong> WhatsApp is opening with your message. Please send it to +91 9990447773. We'll respond shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="status-message error-message-box">
                    <strong>Error!</strong> Failed to process your message. Please try again or contact us directly at +91 9990447773.
                  </div>
                )}

               
              </form>
            </div>
          </div>

          {/* suppressHydrationWarning prevents mismatch errors from animation libraries (e.g. GSAP) that inject inline styles before React hydrates */}
          <div className="col-lg-6 slide-anim" data-offset="100" data-direction="right" suppressHydrationWarning>
            {/* Contact Info Cards for Desktop */}
           

            <div className="map-wrapper h-100" style={{ borderRadius: '10px', overflow: 'hidden', minHeight: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.495602679179!2d77.4197744645638!3d28.618553946995558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8c5b37846f%3A0xec0a735ac0f34c48!2sSS%20INTERIORS!5e0!3m2!1sen!2sin!4v1778818584851!5m2!1sen!2sin" 
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