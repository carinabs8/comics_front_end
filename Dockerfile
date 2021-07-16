# Node image
FROM node:15.5.1

# set working directory
WORKDIR /comics_front_end

# copy source code
COPY . /comics_front_end

# install app dependencies
#RUN yarn install

# run production build
RUN yarn build
RUN yarn global add serve
