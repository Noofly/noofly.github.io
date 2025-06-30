import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterBar = ({
  filterOptions,
  selectedFilter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  sortOptions,
  currentLanguage
}) => {
  const t = {
    searchPlaceholder: {
      en: 'Search projects or technologies...',
      fr: 'Rechercher un projet ou une technologie...'
    },
    sortBy: { en: 'Sort by:', fr: 'Trier par :' },
    activeFilters: { en: 'Active filters:', fr: 'Filtres actifs :' },
    category: { en: 'Category:', fr: 'Catégorie :' },
    search: { en: 'Search:', fr: 'Recherche :' },
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="Search" size={20} color="var(--color-text-secondary)" />
        </div>
        <input
          type="text"
          placeholder={t.searchPlaceholder[currentLanguage]}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <Icon name="X" size={16} color="var(--color-text-secondary)" />
          </button>
        )}
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedFilter === option.value
                  ? 'bg-accent text-white shadow-subtle'
                  : 'bg-white text-text-primary border border-secondary-300 hover:border-accent-300 hover:text-accent'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{option.label}</span>
              <span className={`ml-2 text-xs ${
                selectedFilter === option.value ? 'text-accent-100' : 'text-text-secondary'
              }`}>
                ({option.count})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-text-secondary">{t.sortBy[currentLanguage]}</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="pl-3 pr-8 py-2 border border-secondary-300 rounded-lg text-sm font-medium text-text-primary focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedFilter !== 'all' || searchTerm) && (
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-text-secondary">{t.activeFilters[currentLanguage]}</span>
          <div className="flex flex-wrap gap-2">
            {selectedFilter !== 'all' && (
              <div className="flex items-center space-x-1 bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">
                <span>{t.category[currentLanguage]} {filterOptions.find(f => f.value === selectedFilter)?.label}</span>
                <button
                  onClick={() => onFilterChange('all')}
                  className="hover:text-accent-900 transition-colors duration-200"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
            )}
            {searchTerm && (
              <div className="flex items-center space-x-1 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                <span>{t.search[currentLanguage]} "{searchTerm}"</span>
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:text-secondary-900 transition-colors duration-200"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;