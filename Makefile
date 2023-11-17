### DEV

build:
	cd socket && $(MAKE) build
	docker build -t prathibha097/av-bids .

run-dev:
	docker-compose up