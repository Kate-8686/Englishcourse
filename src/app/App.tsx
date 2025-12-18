import { Plane, Globe, Users, Calendar, DollarSign, Sparkles, MapPin, Utensils, Hotel, LifeBuoy, Camera, Smile, Award, Monitor, Wifi, Clock, Check } from "lucide-react";

export default function App() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById("enroll-section");
    enrollSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1423] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        {/* Gradient overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Набор открыт!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Английский для путешествий
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </p>
          
          <button 
            onClick={scrollToEnroll}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Globe className="w-5 h-5" />
            Записаться на курс
          </button>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Для кого курс
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl text-primary">Первая группа</h3>
                </div>
                <p className="text-3xl mb-2">4–5 класс</p>
                <p className="text-muted-foreground">Идеально для начинающих путешественников</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-2xl p-8 hover:border-secondary/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl text-secondary">Вторая группа</h3>
                </div>
                <p className="text-3xl mb-2">6–8 класс</p>
                <p className="text-muted-foreground">Для более продвинутого уровня</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-transparent via-card/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Программа курса
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            8 практических модулей, охватывающих все важные ситуации в путешествиях
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Module 1 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">1. Аэропорт без стресса</h3>
                  <p className="text-muted-foreground mb-3">
                    Регистрация, паспортный контроль, вопросы на таможне — всё на английском.
                  </p>
                  <p className="text-sm text-primary">
                    ✓ Уверенность уже в первые часы за границей
                  </p>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                  <Hotel className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">2. В отеле: заселение и помощь</h3>
                  <p className="text-muted-foreground mb-3">
                    Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
                  </p>
                  <p className="text-sm text-secondary">
                    ✓ Практика вежливых фраз и повседневной лексики
                  </p>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <Utensils className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">3. Кафе и рестораны</h3>
                  <p className="text-muted-foreground mb-3">
                    Заказ еды, вопросы про аллергены, счёт и чаевые.
                  </p>
                  <p className="text-sm text-accent">
                    ✓ Развитие гастрономического словаря
                  </p>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">4. На улице: ориентирование</h3>
                  <p className="text-muted-foreground mb-3">
                    Как спросить дорогу, вызвать такси или найти аптеку.
                  </p>
                  <p className="text-sm text-primary">
                    ✓ Понимание устной речи в реальных ситуациях
                  </p>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                  <LifeBuoy className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">5. Экстренные случаи</h3>
                  <p className="text-muted-foreground mb-3">
                    Потеря вещей, болезнь, помощь полиции — всё это на английском.
                  </p>
                  <p className="text-sm text-secondary">
                    ✓ Важные фразы, которые могут спасти отпуск
                  </p>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">6. Туризм и развлечения</h3>
                  <p className="text-muted-foreground mb-3">
                    Покупка билетов, экскурсии, общение с гидами, музеи и парки.
                  </p>
                  <p className="text-sm text-accent">
                    ✓ Погружение в культурный контекст через язык
                  </p>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">7. Дружба в путешествиях</h3>
                  <p className="text-muted-foreground mb-3">
                    Как познакомиться с другими детьми или подростками за границей.
                  </p>
                  <p className="text-sm text-primary">
                    ✓ Игровая практика диалогов
                  </p>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">8. Дипломный проект</h3>
                  <p className="text-muted-foreground mb-3">
                    Ребёнок планирует воображаемое путешествие и представляет его на английском.
                  </p>
                  <p className="text-sm text-secondary">
                    ✓ Развитие связной речи и творческого самовыражения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Почему этот курс особенный?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Акцент на практическую, живую речь, а не на грамматику ради грамматики
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-secondary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-muted-foreground">
                Все ситуации — из реальной жизни путешественника
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <p className="text-muted-foreground">
                Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-transparent via-card/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Что потребуется
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2">Оборудование</h3>
                <p className="text-muted-foreground">
                  Стационарный компьютер или ноутбук с наушниками и микрофоном
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                <Wifi className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2">Интернет</h3>
                <p className="text-muted-foreground">
                  Стабильный интернет и Zoom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Schedule */}
            <div className="bg-card/30 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl text-primary">Расписание</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-background/50 rounded-xl">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">Четверг, 15:00 (МСК)</p>
                    <p className="text-sm text-muted-foreground">Группа 4–5 класс</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-background/50 rounded-xl">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">Пятница, 15:30 (МСК)</p>
                    <p className="text-sm text-muted-foreground">Группа 6–8 класс</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-card/30 backdrop-blur-sm border border-secondary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl text-secondary">Стоимость</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl border border-secondary/30">
                  <p className="text-sm text-muted-foreground mb-2">Полный курс (10 уроков)</p>
                  <p className="text-3xl text-secondary">12 000 ₽</p>
                </div>
                
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Абонемент</p>
                  <p className="text-2xl">1 300 ₽ / урок</p>
                </div>
              </div>
            </div>
          </div>

          {/* Group Size Info */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Набор открыт!</h3>
            </div>
            <p className="text-muted-foreground mb-2">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            <p className="text-accent">Места ограничены!</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="enroll-section" className="px-4 py-16 md:py-24 bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl mb-6">
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </h2>
            
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/50">
              <Plane className="w-6 h-6" />
              <span className="text-xl">Записаться на курс</span>
            </button>
            
            <p className="text-sm text-muted-foreground mt-6">
              После нажатия кнопки с вами свяжется наш менеджер для уточнения деталей
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Английский для путешествий. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
