import Link from "next/link"
import styles from "./page.module.css"
import { getMeals } from "@/lib/meals"
import { MealsGrid } from "@/components/meals-grid";
import { Suspense } from "react";
import LoadingMeals from "@/components/loading-meals";

function MealsComponent() {
  const meals = getMeals();

  return (
    <MealsGrid meals={meals} />
  )
}

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<LoadingMeals />}>
          <MealsComponent />
        </Suspense>
      </main>
    </>
  )
}