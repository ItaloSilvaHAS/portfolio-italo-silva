import { useState } from "react";
import { Mail, MapPin, Clock, Github, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-trigger">
          <h2 className="text-4xl md:text-5xl font-thin mb-4 text-primary">
            Vamos <span className="font-bold">Conectar?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu próximo projeto revolucionário!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8 fade-in-trigger">
            <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-gray-900 border-gray-700 focus:border-primary"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-900 border-gray-700 focus:border-primary"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tipo de Projeto</label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="bg-gray-900 border-gray-700 focus:border-primary" data-testid="select-project-type">
                    <SelectValue placeholder="Selecione o tipo de projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Corporativo</SelectItem>
                    <SelectItem value="webapp">Aplicação Web</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="mobile">Aplicativo Mobile</SelectItem>
                    <SelectItem value="game">Game Development</SelectItem>
                    <SelectItem value="consulting">Consultoria Técnica</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Orçamento Estimado</label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="bg-gray-900 border-gray-700 focus:border-primary" data-testid="select-budget">
                    <SelectValue placeholder="Selecione a faixa de orçamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1k-5k">R$ 1.000 - R$ 5.000</SelectItem>
                    <SelectItem value="5k-15k">R$ 5.000 - R$ 15.000</SelectItem>
                    <SelectItem value="15k-30k">R$ 15.000 - R$ 30.000</SelectItem>
                    <SelectItem value="30k+">R$ 30.000+</SelectItem>
                    <SelectItem value="discuss">Vamos conversar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Descrição do Projeto</label>
                <Textarea
                  rows={4}
                  placeholder="Conte-me sobre seu projeto e como posso ajudar..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-gray-900 border-gray-700 focus:border-primary resize-none"
                  data-testid="textarea-description"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-black hover:bg-primary/80 font-semibold"
                data-testid="button-submit-proposal"
              >
                Enviar Proposta
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 fade-in-trigger">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary text-xl w-6" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">italo.ss2007@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary text-xl w-6" size={24} />
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-gray-400">São Paulo, Brasil</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-primary text-xl w-6" size={24} />
                  <div>
                    <p className="font-semibold">Disponibilidade</p>
                    <p className="text-gray-400">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 fade-in-trigger">
              <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  data-testid="link-github"
                >
                  <Github className="text-white text-xl" size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="text-white text-xl" size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  data-testid="link-youtube"
                >
                  <Youtube className="text-white text-xl" size={20} />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  data-testid="link-twitter"
                >
                  <Twitter className="text-white text-xl" size={20} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
            
            {/* Availability Status */}
            <div className="glass-effect rounded-2xl p-6 text-center fade-in-trigger">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-400">Disponível para Projetos</span>
              </div>
              <p className="text-sm text-gray-400">Aceitando novos desafios em 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
