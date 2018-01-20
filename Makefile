.PHONY: all build run

all: build

build:
	npm run build

run:
	serve -s build
