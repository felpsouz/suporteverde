"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false); // Fecha o menu mobile após clicar
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg sm:text-xl font-bold">🐾</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">PetSpace</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contato
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={() => scrollToSection('contato')}
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            Começar Agora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-2"
              >
                Começar Agora
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Cuide Melhor do Seu Pet com o PetSpace
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                A plataforma completa para gerenciar a saúde, bem-estar e felicidade do seu melhor amigo. Tudo em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Comece Gratuitamente
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center justify-center h-64 sm:h-80">
                  <div className="text-center">
                    <div className="text-6xl sm:text-8xl md:text-9xl mb-3 sm:mb-4">🐕</div>
                    <div className="flex justify-center gap-3 sm:gap-4">
                      <span className="text-4xl sm:text-5xl md:text-6xl">🐈</span>
                      <span className="text-4xl sm:text-5xl md:text-6xl">🐦</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-orange-400 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg text-xs sm:text-sm">
                100% Grátis
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-green-400 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg text-xs sm:text-sm">
                Sem Complicação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Plan Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Escolha Seu Plano</h2>
            <p className="text-lg sm:text-xl text-gray-600">Soluções personalizadas para cada necessidade do seu pet</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Plan cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Básico</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Perfeito para começar a organizar a vida do seu pet</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Perfil do pet completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Calendário de vacinas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Lembretes básicos</span>
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold transition-colors"
              >
                Começar
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-xl md:transform md:scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                Mais Popular
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Premium</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6">Recursos completos para cuidados avançados</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-white">Tudo do plano Básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-white">Histórico médico completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-white">Agendamento de consultas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-white">Suporte prioritário</span>
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-white hover:bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold transition-colors"
              >
                Começar Premium
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Para clínicas e profissionais pet</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Tudo do Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Múltiplos usuários</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">API integrada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Suporte dedicado</span>
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold transition-colors"
              >
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para cuidar do seu pet com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">💉</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Gestão de Vacinas</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Mantenha o calendário de vacinação sempre em dia com lembretes automáticos e histórico completo.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all text-sm sm:text-base"
                >
                  Saiba mais 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">📅</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Agendamentos</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Agende consultas veterinárias, banho e tosa direto pela plataforma de forma rápida e prática.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center text-green-600 font-semibold hover:gap-2 transition-all text-sm sm:text-base"
                >
                  Saiba mais 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">📊</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Histórico Médico</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Registre e acompanhe todo o histórico de saúde do seu pet em um só lugar, sempre acessível.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center text-purple-600 font-semibold hover:gap-2 transition-all text-sm sm:text-base"
                >
                  Saiba mais 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">🔔</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Lembretes Smart</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Nunca mais esqueça medicamentos, alimentação ou atividades importantes do seu pet.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center text-orange-600 font-semibold hover:gap-2 transition-all text-sm sm:text-base"
                >
                  Saiba mais 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">📱</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">App Mobile</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Acesse todas as informações do seu pet onde estiver com nosso app intuitivo.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center text-pink-600 font-semibold hover:gap-2 transition-all text-sm sm:text-base"
                >
                  Saiba mais 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">👥</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Comunidade</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Conecte-se com outros tutores, compartilhe experiências e aprenda sempre mais.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center text-cyan-600 font-semibold hover:gap-2 transition-all text-sm sm:text-base"
                >
                  Saiba mais 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">10K+</div>
              <div className="text-blue-100 text-sm sm:text-base md:text-lg">Pets Cadastrados</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">95%</div>
              <div className="text-blue-100 text-sm sm:text-base md:text-lg">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">24/7</div>
              <div className="text-blue-100 text-sm sm:text-base md:text-lg">Suporte</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">100%</div>
              <div className="text-blue-100 text-sm sm:text-base md:text-lg">Seguro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="beneficios" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Por Que Escolher o PetSpace?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Desenvolvido com amor por especialistas em pets e tecnologia para oferecer a melhor experiência.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Tudo em Um Lugar</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Centralize todas as informações do seu pet em uma única plataforma segura e intuitiva.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">100% Seguro</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Seus dados e do seu pet protegidos com criptografia de ponta e conformidade LGPD.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Rápido e Fácil</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Interface pensada para ser simples e eficiente, economizando seu tempo precioso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-center h-72 sm:h-96">
                  <div className="text-center w-full">
                    <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">🐕‍🦺</div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-blue-50 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">Próxima Vacina</span>
                          <span className="text-blue-600 font-bold text-sm sm:text-base">15 Dez</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">Banho e Tosa</span>
                          <span className="text-green-600 font-bold text-sm sm:text-base">20 Dez</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 bg-purple-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Histórias reais de tutores apaixonados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "Nunca mais esqueci uma vacina do meu dog! O PetSpace mudou completamente a forma como cuido do Rex."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Maria Clara</div>
                  <div className="text-xs sm:text-sm text-gray-600">Tutora do Rex</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "Trabalho em uma clínica e recomendo o PetSpace para todos os tutores. Facilita muito nossa comunicação!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JS
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Dr. João Silva</div>
                  <div className="text-xs sm:text-sm text-gray-600">Veterinário</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "Aplicativo perfeito! Consigo gerenciar meus 3 gatos facilmente e ainda recebo dicas valiosas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  AS
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Ana Santos</div>
                  <div className="text-xs sm:text-sm text-gray-600">Tutora de 3 gatos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Pronto Para Começar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de tutores que já transformaram o cuidado com seus pets. É grátis para começar!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Criar Conta Grátis
            </button>
            <button className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white/10 transition-colors">
              Agendar Demo
            </button>
          </div>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-blue-100">
            Não precisa cartão de crédito • Suporte em português • LGPD compliant
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg sm:text-xl">🐾</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">PetSpace</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Cuidando do seu melhor amigo com tecnologia e amor.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Produto</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Empresa</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Suporte</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2026 PetSpace. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Termos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}