import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { paints } from "../../../../constants/paintsConfig";
import { ALL_PRODUCTS } from "../../../../constants/roots";
import { PaintCard } from "../PaintCard";
import { EmptyWall, PaintsCards } from "./styles";

const Categories = () => {
  const { category } = useParams();

  const [disputedPaints, setDisputedPaints] = useState([]);

  const allPaints = useMemo(() => {
    const set = new Set(Object.values(paints).flat());
    return Array.from(set);
  }, []);

  useEffect(() => {
    if (category === ALL_PRODUCTS) {
      setDisputedPaints(allPaints);
    } else {
      const filteredPaints = allPaints.filter((paint) =>
        paint.category.includes(category)
      );
      setDisputedPaints(filteredPaints);
    }
  }, [category]);

  return (
    <>
      {disputedPaints.length ? (
        <PaintsCards>
          {disputedPaints.map((paint) => (
            <PaintCard key={paint.name} paint={paint}></PaintCard>
          ))}
        </PaintsCards>
      ) : (
        <EmptyWall>Товара нет в наличии</EmptyWall>
      )}
    </>
  );
};

export default Categories;
