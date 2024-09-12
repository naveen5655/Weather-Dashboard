# Variables
DOCKER_IMAGE = naveen5655/weather-dashboard:latest

# Targets
.PHONY: lint test build push clean

lint:
	@echo "Linting the code..."

test:
	@echo "Running tests..."

build:
	@echo "Building Docker image..."
	docker build -t $(DOCKER_IMAGE) .

push:
	@echo "Pushing Docker image to Docker Hub..."
	docker push $(DOCKER_IMAGE)

clean:
	@echo "Cleaning workspace..."
	docker system prune -af
	rm -rf node_modules
