worker_processes 1;

events { worker_connections 1024; }

http {

  sendfile on;

  server {
    listen 80;

    location /api {
      rewrite /api/(.*) /$1  break;
      proxy_pass         http://comic_app_web_1:4001;
      proxy_redirect     off;
      proxy_set_header   Host $host;
      proxy_set_header   X-Real-IP $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header   X-Forwarded-Host $server_name;
    }

    location / {
      proxy_pass         http://comics_front_end_web_comics_front_end_1:5000/;
      proxy_redirect     off;
      proxy_set_header   Host $host;
      proxy_set_header   X-Real-IP $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header   X-Forwarded-Host $server_name;
    }
  }
}