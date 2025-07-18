import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-5xl font-bold text-white mb-8">Contact Us</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We would love to hear from you. Reach out to us for any inquiries or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us, call us, or send us a message. We are here to serve and support you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Address</h3>
                      <div className="text-gray-600 leading-relaxed">
                        <p className="font-medium text-gray-800 mb-2">CATHOLIC DIOCESE OF MOROGORO</p>
                        <p className="font-medium text-gray-800 mb-2">UNITAS FOR AFRICA</p>
                        <p>P.O.BOX 1003,</p>
                        <p>JAKA ROAD, KINDIBWA STREET, PLOT NO 6</p>
                        <p>MOROGORO, TANZANIA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+255754934340" className="hover:text-blue-600 transition-colors">
                          +255 754 934340
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:unitassisters1942@gmail.com" className="hover:text-blue-600 transition-colors">
                          unitassisters1942@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: After Mass Services</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (Optional)
                      </label>
                      <Input id="phone" type="tel" placeholder="+255 xxx xxx xxx" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        placeholder="Please share your message, questions, or how we can assist you..."
                      />
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Morogoro, Tanzania</p>
                <p className="text-xs mt-2">Jaka Road, Kindibwa Street, Plot No 6</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}