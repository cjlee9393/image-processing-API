FROM node
WORKDIR /home/node
ADD . ./image-processing-api

WORKDIR /home/node/image-processing-api
ENTRYPOINT ["bash"]