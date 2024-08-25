'use client'

import Image from "next/image";
import styles from "./page.module.css";
import CardComponent from "./ui/components/miniCompos/CardCompo";
import Pagination from "./ui/components/pagination";
import { useEffect, useState } from "react";
import Skeleton from "./skeleton";
import { useAppContext } from "./context/AppContext";



export default function Home() {
  const [loading, setLoading] = useState(true);
  const { state, setState } = useAppContext();

  const handleClick = () => {
    setState(state + 1)
  }

  useEffect(() => {
    // Demo of a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) {
    return <div className="skeletonCardContainer">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      </div>;
  }
  return (
    <main className={styles.main}>
      <div className="CardContainer">
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
        <CardComponent onClick={handleClick}/>
      </div>
      <Pagination totalPages={12} />
    </main>
  );
}
