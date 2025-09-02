import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-inter font-bold text-xl text-primary">
              МедРехаб
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="font-open-sans hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="font-open-sans hover:text-primary transition-colors">О клинике</a>
              <a href="#contact" className="font-open-sans hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-inter font-bold text-5xl lg:text-6xl leading-tight">
                Путь к <span className="text-primary">новой жизни</span><br />
                начинается здесь
              </h1>
              <p className="font-open-sans text-xl text-gray-600 leading-relaxed">
                Профессиональная наркологическая помощь и комплексная реабилитация. 
                Мы поможем вернуть здоровье и обрести уверенность в завтрашнем дне.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d08ac05c-9385-4980-8afe-3ecb95408483.jpg" 
                alt="Медицинский центр реабилитации" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl mb-4">Наши услуги</h2>
            <p className="font-open-sans text-xl text-gray-600">Комплексный подход к лечению и реабилитации</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="HeartPulse" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-xl">Детоксикация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-center">
                  Безопасное очищение организма под наблюдением врачей-наркологов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-xl">Психотерапия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-center">
                  Индивидуальная и групповая работа с психологами и психотерапевтами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-xl">Реабилитация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-center">
                  Программы долгосрочного восстановления и социальной адаптации
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-xl">Стационар</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-center">
                  Круглосуточный медицинский контроль в комфортных условиях
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-xl">Профилактика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-center">
                  Программы предотвращения рецидивов и поддержания результата
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-xl">Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-center">
                  Круглосуточная консультационная поддержка наших специалистов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl mb-4">Результаты нашей работы</h2>
            <p className="font-open-sans text-xl text-gray-600">Цифры, которые говорят сами за себя</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">87%</div>
              <p className="font-open-sans text-gray-600">Успешных случаев реабилитации</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="font-open-sans text-gray-600">Лет успешной работы</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">2500+</div>
              <p className="font-open-sans text-gray-600">Пациентов вернулись к здоровой жизни</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="font-open-sans text-gray-600">Круглосуточная поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/3e4bfee0-2ac5-40c4-9bbc-6347eebdfcea.jpg" 
                alt="Консультация специалиста" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-inter font-bold text-4xl">Почему выбирают нас</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl mb-2">Квалифицированные специалисты</h3>
                    <p className="font-open-sans text-gray-600">Команда врачей-наркологов, психиатров и психологов с многолетним опытом</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl mb-2">Современные методы лечения</h3>
                    <p className="font-open-sans text-gray-600">Применение передовых технологий и проверенных международных программ</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl mb-2">Конфиденциальность</h3>
                    <p className="font-open-sans text-gray-600">Полная анонимность и соблюдение врачебной тайны на всех этапах лечения</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl mb-2">Комплексный подход</h3>
                    <p className="font-open-sans text-gray-600">Лечение не только зависимости, но и сопутствующих заболеваний</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl mb-4">Свяжитесь с нами</h2>
            <p className="font-open-sans text-xl text-gray-600">Первый шаг к выздоровлению — это обращение за помощью</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-xl mb-2">Телефон</h3>
                  <p className="font-open-sans text-gray-600">+7 (495) 123-45-67</p>
                  <p className="font-open-sans text-sm text-gray-500">Круглосуточно, без выходных</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-xl mb-2">Адрес</h3>
                  <p className="font-open-sans text-gray-600">г. Москва, ул. Здоровья, д. 15</p>
                  <p className="font-open-sans text-sm text-gray-500">5 минут от м. Соколиники</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-xl mb-2">Email</h3>
                  <p className="font-open-sans text-gray-600">info@medrehab.ru</p>
                  <p className="font-open-sans text-sm text-gray-500">Ответим в течение часа</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-inter text-2xl">Запишитесь на консультацию</CardTitle>
                <CardDescription className="font-open-sans">Заполните форму и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="font-open-sans" />
                <Input placeholder="Номер телефона" className="font-open-sans" />
                <Textarea placeholder="Опишите вашу ситуацию (необязательно)" className="font-open-sans" />
                <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="font-open-sans text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-inter font-bold text-2xl mb-4">МедРехаб</div>
              <p className="font-open-sans text-gray-300 mb-4">
                Профессиональная наркологическая помощь и реабилитация. Возвращаем людям здоровье и веру в себя.
              </p>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">Услуги</h3>
              <ul className="font-open-sans space-y-2 text-gray-300">
                <li>Детоксикация</li>
                <li>Реабилитация</li>
                <li>Психотерапия</li>
                <li>Стационарное лечение</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">Контакты</h3>
              <div className="font-open-sans space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@medrehab.ru</p>
                <p>г. Москва, ул. Здоровья, д. 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="font-open-sans text-gray-400">
              © 2024 МедРехаб. Все права защищены. Лицензия №ЛО-77-01-123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}