FROM node
WORKDIR /home/node
ADD . ./image-processing-api

WORKDIR /home/node/image-processing-api
RUN npm install
ENTRYPOINT ["bash"]