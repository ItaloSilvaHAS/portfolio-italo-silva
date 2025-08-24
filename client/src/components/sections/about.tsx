import { Heart, Rocket, GraduationCap, Gamepad2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left fade-in-trigger">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 text-primary">
              Sobre <span className="font-bold">Mim</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Aos 20 anos, sou um desenvolvedor apaixonado por criar soluções que transformem vidas e gerem impacto social positivo. Formado em Desenvolvimento de Sistemas pela ETEC de Sapopemba e atualmente cursando Análise e Desenvolvimento de Sistemas na FATEC.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Sempre focado na inovação e excelência técnica, desenvolvo soluções que não apenas funcionam, mas inspiram. Cada linha de código é um passo em direção ao futuro que queremos construir.
            </p>
            
            {/* Focus Areas */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-effect p-4 rounded-lg">
                <Heart className="text-red-400 text-xl mb-2" size={24} />
                <h3 className="font-semibold mb-1">Impacto Social</h3>
                <p className="text-sm text-gray-400">Tecnologia para transformar</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <Rocket className="text-primary text-xl mb-2" size={24} />
                <h3 className="font-semibold mb-1">Inovação</h3>
                <p className="text-sm text-gray-400">Cada linha de código</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <GraduationCap className="text-yellow-400 text-xl mb-2" size={24} />
                <h3 className="font-semibold mb-1">Educação</h3>
                <p className="text-sm text-gray-400">Aprendizado contínuo</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <Gamepad2 className="text-purple-400 text-xl mb-2" size={24} />
                <h3 className="font-semibold mb-1">Game Dev</h3>
                <p className="text-sm text-gray-400">Mundos virtuais</p>
              </div>
            </div>
          </div>
          
          <div className="slide-in-right fade-in-trigger">
            {/* Developer stats visualization */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Developer Stats</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Full Stack Development</span>
                    <span className="text-sm text-primary">95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">UI/UX Design</span>
                    <span className="text-sm text-blue-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Game Development</span>
                    <span className="text-sm text-purple-400">82%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Innovation & Problem Solving</span>
                    <span className="text-sm text-green-400">96%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* GitHub-style contribution graph mockup */}
              <div className="mt-8 p-4 bg-gray-900 rounded-lg">
                <h4 className="text-sm font-semibold mb-3">119 Contribuições este ano</h4>
                <div className="grid grid-cols-12 gap-1">
                  {/* Mock contribution squares */}
                  <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
