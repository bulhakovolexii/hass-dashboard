Для развёртывания Home Assistant на бесплатном аккаунте AWS и обеспечения доступа к его API по HTTPS, вы можете использовать Docker и Nginx в качестве обратного прокси. Вот пошаговая инструкция:

1. Создайте экземпляр AWS EC2:

   - Зайдите в вашу учетную запись AWS и перейдите в AWS Management Console.
   - Откройте сервис EC2 (Elastic Compute Cloud) и нажмите "Launch Instance" (Запустить экземпляр).
   - Выберите желаемый Amazon Machine Image (AMI), рекомендуется выбрать Ubuntu Server.
   - Выберите тип экземпляра (Instance Type). Для бесплатного тира выберите тот, который подходит бесплатным условиям.
   - Следуйте инструкциям мастера, выбрав количество хранилища, настройки сети и т.д.
   - Создайте новый или выберите существующий ключ для доступа к экземпляру.

2. Подключитесь к экземпляру через SSH:

   - Используя ключ доступа, подключитесь к вашему экземпляру AWS EC2 по SSH.

3. Установите Docker и Docker Compose:
   - Выполните следующие команды в терминале экземпляра:

```bash
sudo apt update
sudo apt install docker.io
sudo usermod -aG docker $USER
sudo apt install docker-compose
```

4. Установите Home Assistant через Docker Compose:
   - Создайте директорию и файл `docker-compose.yml` для Home Assistant:

```bash
mkdir homeassistant
cd homeassistant
nano docker-compose.yml
```

- Вставьте следующий код в `docker-compose.yml`:

```yaml
version: "3"
services:
  homeassistant:
    container_name: homeassistant
    image: homeassistant/home-assistant
    volumes:
      - ./config:/config
    ports:
      - "8123:8123"
    restart: always
```

- Сохраните и закройте файл (нажмите `Ctrl + X`, затем `Y`, затем `Enter`).

- Запустите Home Assistant контейнер:

```bash
sudo docker-compose up -d
```

5. Установите Nginx и создайте конфигурацию прокси:
   - Установите Nginx:

```bash
sudo apt install nginx
```

- Создайте новый файл конфигурации Nginx для проксирования Home Assistant:

```bash
sudo nano /etc/nginx/sites-available/homeassistant
```

- Вставьте следующую конфигурацию, заменив `your_domain.com` на ваш доменный адрес:

```nginx
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://localhost:8123;
        proxy_set_header Host $host;
        proxy_redirect http:// https://;
    }
}
```

- Создайте символьную ссылку на файл конфигурации в `sites-enabled`:

```bash
sudo ln -s /etc/nginx/sites-available/homeassistant /etc/nginx/sites-enabled/
```

- Проверьте конфигурацию Nginx на наличие ошибок:

```bash
sudo nginx -t
```

- Перезапустите Nginx:

```bash
sudo service nginx restart
```

6. Получите SSL-сертификат с помощью Certbot (Let's Encrypt):
   - Установите Certbot:

```bash
sudo apt install certbot python3-certbot-nginx
```

- Запустите Certbot и следуйте инструкциям:

```bash
sudo certbot --nginx -d your_domain.com
```

- Certbot попросит вас подтвердить свой адрес электронной почты и выбрать, разрешить ли или нет перенаправление HTTP-запросов на HTTPS.

7. Теперь ваш Home Assistant должен быть доступен по адресу `https://your_domain.com`.

Обратите внимание, что вам нужно настроить DNS-записи для вашего домена, чтобы он указывал на публичный IP-адрес вашего экземпляра AWS EC2.

Теперь вы должны иметь работающий Home Assistant, доступный по HTTPS, развёрнутый на бесплатном аккаунте AWS.
