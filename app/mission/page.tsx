import { Target, Heart, Globe, Users, Cross, Lightbulb, Sparkles, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Mission() {
  const values = [
    {
      icon: Cross,
      title: "Faith",
      description: "Prayers, Liturgical celebrations and contemplation"
    },
    {
      icon: Sparkles,
      title: "Hope",
      description: "Bring hope to those seem to dispear in their life"
    },
    {
      icon: Heart,
      title: "Love",
      description: "Expressing God's love through our mission and presence in the community"
    },
    {
      icon: Users,
      title: "Unity",
      description: "We live unity in our mission as we serve those who are in need"
    },
    {
      icon: Globe,
      title: "Active Service",
      description: "Through moral, spiritual and social service education and healthcare in which God's love is made visible and tangible"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Target className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-5xl font-bold text-white mb-8">Our Mission & Charisma</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Guided by divine calling, we dedicate our lives to imitating Christ and serving humanity
          </p>
        </div>
      </section>

   {/* Charisma Statement */}
   <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">OUR CHARISMA</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <p className="text-2xl font-light leading-relaxed text-gray-700">
                Our presence in the world in imitating the life of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">OUR MISSION</h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 shadow-lg">
              <p className="text-2xl font-light leading-relaxed">
                To imitate the love of Jesus Christ to the World
              </p>
            </div>
          </div>
        </div>
      </section>

  

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide our daily lives and shape our mission in the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Live Our Mission */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">How We Live Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Cross className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Prayer & Contemplation</h3>
              <p className="text-blue-100">
                Through deep prayer and contemplation of the Most Holy Trinity, we draw closer to God and find strength for our mission.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Living</h3>
              <p className="text-blue-100">
                Living amidst the people, we share in their joys and sorrows, bringing hope and God's love to every encounter.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Active Service</h3>
              <p className="text-blue-100">
                Through education, healthcare, and social services, we make God's love visible and tangible in our world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we serve our communities through various mission and outreach programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Running pre and primary schools - Morogoro */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="/moro.jpg" 
                  alt="Running pre and primary schools in Morogoro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Running Pre and Primary Schools
                </h3>
                <p className="text-gray-600 mb-4">
                  Providing quality education to children in Morogoro, nurturing their minds and spirits for a brighter future.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Morogoro</span>
                </div>
              </div>
            </div>

            {/* Teaching prayers to youths */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="/pray.jpg" 
                  alt="Teaching prayers to youths" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Teaching Prayers to Youths
                </h3>
                <p className="text-gray-600 mb-4">
                  Guiding young people in their spiritual journey, helping them develop a deep and meaningful prayer life.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Morogoro</span>
                </div>
              </div>
            </div>

            {/* Taking care of orphan and disabled children - Dar es Salaam */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="/care.jpg" 
                  alt="Taking care of orphans and disabled children in Dar es Salaam" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Caring for Orphan and Disabled Children
                </h3>
                <p className="text-gray-600 mb-4">
                  Providing love, care, and support to vulnerable children that ensuring they feel valued and cherished.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Dar es Salaam</span>
                </div>
              </div>
            </div>

            {/* Taking care of children with special needs - Mwanza */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="/child.jpg" 
                  alt="Taking care of children with special needs in Mwanza" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Caring for Children with Special Needs
                </h3>
                <p className="text-gray-600 mb-4">
                  Providing specialized care and support to children with special needs, helping them reach their full potential.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Mwanza</span>
                </div>
              </div>
            </div>

            {/* Preparing church clothes */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/clothes.jpg" 
                  alt="Preparing church clothes" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Preparing Liturgical Vestments
                </h3>
                <p className="text-gray-600 mb-4">
                  Creating beautiful liturgical vestments with care and devotion for worship services.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Dar es Salaam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}