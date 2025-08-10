# Python Prisma

Prawee Wongsa

## Using it
```bash
cp env.simple .env
docker compose -f db.yml up -d
```

## Prisma
### First time
```bash
npx prisma generate
npx prisma db push
```