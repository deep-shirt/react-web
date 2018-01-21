.PHONY: all build run

all: deps build

deps:
	npm install

build:
	npm run build

run:
	serve -s build
