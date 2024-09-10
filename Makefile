# Variables
DOCKER_IMAGE = naveen5655/weather-dashboard:latest

# Targets
.PHONY: lint test build push clean

lint:
	@echo "Linting the code..."
	# Add your linting commands here (e.g., eslint, flake8)

test:
	@echo "Running tests..."
	# Add your testing commands here (e.g., jest, pytest)

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
