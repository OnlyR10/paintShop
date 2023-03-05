import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { paints } from "../../../../constants/PaintsConfig";
import { ALL_PRODUCTS } from "../../../../constants/Roots";
import { PaintCard } from "../PaintCard/PaintCard";
import { PaintsCards } from "./styles";

export const Categories = () => {
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
    <PaintsCards>
      {disputedPaints.map((paint) => (
        <PaintCard key={paint.name} paint={paint}></PaintCard>
      ))}
    </PaintsCards>
  );
};
