# Stage 1: Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Temporarily disable prepare script for production builds
ENV HUSKY_SKIP_INSTALL=1

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production Stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only production dependencies
COPY package.json package-lock.json ./
ENV NODE_ENV=production
RUN npm install --omit=dev

# Copy built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the application port
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]