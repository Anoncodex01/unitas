import { History, Cross, Users, Heart, Globe, BookOpen, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/dPicture1.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <Cross className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-6">
              Discover our journey of faith, unity, and service
            </p>
          </div>
        </div>
      </section>

      {/* Holy Trinity Logo Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-8">
              <img 
                src="/Picture1.png" 
                alt="Holy Trinity Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <h2 className="text-5xl font-bold text-gray-900">Our Institute's Logo</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
Our institution's logo represents the Holy Trinity. We are called to contemplate the Most Holy Trinity and to make the love of God visible through the way we live and care for others.            </p>
          </div>
        </div>
      </section>

      {/* Historical Background Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
            <h2 className="text-5xl font-bold text-gray-900">OUR HISTORICAL BACKGROUND OF UNITAS</h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Our Foundation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  UNITAS was Founded by Fr Joseph Marie Drehmanns, a Redemptorist priest (Religious Priest) on the 15th October 1942 Netherland. As the second World War was taking place at this time in Amsterdam was occupied by the Germans.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fr Drehmanns began the Institute as a retreat group whose members were known as the St Teresa of Avila Retreat Club. The members took the three Vows of Poverty, Chastity and Obedience and among themselves they were known as "Bride of Christ.                </p>
                <p className="text-gray-700 leading-relaxed">
                  Fr Drehmanns himself for seven years served as the secretary at St Peter's Mission Work. Rome at that time, Angelo Cardinal Roncalli, who later on become Pope John XXIII, who served as their chairman.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-green-600" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UNITAS is a Secular Institute of Consecrated life in which the members are called to devote themselves to the contemplation of the Most Holy Trinity and to make the love of God visible through the way they live and care for others.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl transform rotate-3"></div>
              <img
                src="/20241214_113921 (1).jpg"
                alt="UNITAS Team Members"
                className="relative rounded-3xl shadow-2xl w-full h-96"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-600" />
                Growth and Expansion
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">                In later years, the Institute took the name UNITAS which is Latin, means Unity. UNITAS was first recognized and approved in the Archdiocese of Utrecht, Netherland.
              </p>
              <p className="text-gray-700 leading-relaxed">             Since its foundation, in Amsterdam Netherland, the members of UNITAS has spread into to many countries: Luxembourg, Germany, Brazil, Belgium, Tanzania and India.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-orange-600" />
                Mission to Africa
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">            Before the death of Fr Drehmanns, two Missionaries: Dr Petronella Theunissen and Maria Anna Nijkamp; were asked and commisioned by the founder Fr Jospeh to come to Tanganyika.
              </p>
              <p className="text-gray-700 leading-relaxed">             These Missionaries  arrived Morogoro, Tanganyika specifically at Bigwa on the 05/06/1962. Having arrived at Bigwa, they set a focal development center for trainning social workers, Dispensary for leprosy people and kindergaten.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">     <h3 className="text-3xl font-bold mb-6">Presence in Tanzania</h3>
            <p className="text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
              From 1997, UNITAS as catholic concecrated institution, came up with a decision that each country should become independent. In Tanzania, UNITAS members are serving in: Morogoro, Songea, Mwanza, Dar es Salaam, Arusha and Mbulu dioceses.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">              <div className="bg-white/10 rounded-xl p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-xl font-semibold mb-2">Unity and Fellowship</h4>
                <p className="text-white/80">Members Living in unity and fellowship</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Cross className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-xl font-semibold mb-2">Faith</h4>
                <p className="text-white/80">Centered in Christ's teachings</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-xl font-semibold mb-2">Service</h4>
                <p className="text-white/80">Caring for those in need</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}