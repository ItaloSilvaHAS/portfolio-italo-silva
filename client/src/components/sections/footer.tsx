import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Ítalo Silva. Transformando ideias em realidade digital.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Feito com</span>
            <Heart className="text-red-400 text-sm" size={16} />
            <span className="text-sm text-gray-500">e muita</span>
            <Coffee className="text-yellow-600 text-sm" size={16} />
          </div>
        </div>
        
        {/* Developer Quote */}
        <div className="text-center mt-8 pt-8 border-t border-gray-900">
          <p className="text-primary font-light italic text-sm">
            "Cada linha de código é um passo em direção ao futuro que queremos construir" 
          </p>
          <p className="text-gray-500 text-xs mt-2">
            "Code with purpose, create with passion, innovate with impact"
          </p>
        </div>
      </div>
    </footer>
  );
}
