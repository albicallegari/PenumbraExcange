"use client";

import Image from "next/image";
import PenumbraChips from "../PenumbraChips/PenumbraChips";
import { MAINNETS, TABS, UM_PRICE } from "@/constants/constants";
import PenumbraSelect from "../PenumbraSelect/PenumbraSelect";
import { useNetwork } from "@/providers/NetworkProvider";
import PenumbraTabs from "../PenumbraTabs/PenumbraTabs";
import { useState } from "react";
import { PenumbraAppBarProps } from "./PenumbraAppBar.model";
import AppBarSearch from "./components/AppBarSearch/AppBarSearch";

export const PenumbraAppBar = ({
  sectionActive,
  onChange,
}: PenumbraAppBarProps) => {
  const { network, setNetwork } = useNetwork();
  const [tabActive, setTabActive] = useState(sectionActive);

  const handleTabSelection = (value: string) => {
    setTabActive(value);
    onChange(value);
  };

  return (
    <nav className="flex items-center justify-between bg-black-alt py-4">
      {/* Logo e Select */}
      <div className="flex items-center gap-4">
        <Image
          src="/noctis-logo.svg"
          alt="Noctis logo"
          width={120}
          height={40}
          priority
        />
        <PenumbraSelect
          options={MAINNETS}
          initialValue={network}
          onChange={setNetwork}
        />
      </div>

      {/* Tabs */}
      <PenumbraTabs
        tabs={TABS}
        tabActive={tabActive}
        onChange={handleTabSelection}
      />

      {/* Search e Chip */}
      <div className="flex items-center gap-4">
        <AppBarSearch />
        <PenumbraChips
          price={UM_PRICE.price}
          performance={UM_PRICE.performance}
        />
      </div>
    </nav>
  );
};

export default PenumbraAppBar;
