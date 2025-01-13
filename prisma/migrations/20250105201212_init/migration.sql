-- CreateTable
CREATE TABLE "health" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(50),
    "create_date_manual" TIMESTAMP,
    "create_date_js" TIMESTAMP,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "health_pkey" PRIMARY KEY ("id")
);
