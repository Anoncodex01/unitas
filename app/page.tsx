import { Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Picture1111.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white/10 backdrop-blur-sm">
              <img 
                src="/Picture1.png" 
                alt="Unitas Logo" 
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-2xl font-bold mb-8 leading-tight">
            UNITAS FOR AFRICA
            TANZANIA

          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl">
            We are Consecrated women called to Imitate the Life of Jesus in the World! Living amidst the people, brings hope! We live and care for socially morally and spiritually.
          </p>
        </div>
      </section>

      {/* Team Leader Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Team Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are our leaders who guide and serve our institute with unshakeable faith and mission.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/1.jpg" 
                  alt="Team Leader 1" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/2.jpg" 
                  alt="Team Leader 2" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/3.jpg" 
                  alt="Team Leader 3" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/4.jpg" 
                  alt="Team Leader 4" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/5.jpg" 
                  alt="Team Leader 5" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/6.jpg" 
                  alt="Team Leader 6" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Team Member 7 */}
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/7.jpg" 
                  alt="Team Leader 7" 
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Profession Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              First Profession
            </h2>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/20241214_113325.jpg" 
                alt="First Profession Ceremony" 
                className="rounded-2xl shadow-2xl max-w-4xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}