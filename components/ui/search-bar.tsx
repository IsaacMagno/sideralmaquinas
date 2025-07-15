import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  onSearch?: (value: string) => void;
}

export function SearchBar({
  placeholder = "Pesquisar produtos...",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSearch) onSearch(value);
  }

  return (
    <form
      className={`flex w-full max-w-full ${className}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <Input
        placeholder={placeholder}
        className={`rounded-r-none border-r-0 focus-visible:ring-0 text-xs sm:text-base w-full ${inputClassName}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type="submit"
        className={`rounded-l-none bg-gray-800 hover:bg-gray-700 px-3 sm:px-6 text-xs sm:text-base ${buttonClassName}`}
      >
        PESQUISAR
      </Button>
    </form>
  );
}
