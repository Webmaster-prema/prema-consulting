import React, { useEffect } from 'react';
import { Plus } from 'lucide-react';

// Uses <details> so every answer stays in the DOM for crawlers and screen readers.
// Each item has an id, so /faq#<id> opens and scrolls to that question.
const FaqList = ({ items, openFirst = false }) => {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const el = id && document.getElementById(id);
    if (el && el.tagName === 'DETAILS') {
      el.open = true;
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
  }, []);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.id}
          id={item.id}
          open={openFirst && index === 0}
          className="group relative overflow-hidden scroll-mt-32 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-md open:border-transparent open:shadow-xl open:shadow-primary/10 open:ring-1 open:ring-primary/20 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-blue-600 before:opacity-0 open:before:opacity-100 before:transition-opacity"
        >
          <summary className="flex items-start gap-4 md:gap-6 cursor-pointer list-none px-6 md:px-8 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-2xl md:text-3xl font-bold leading-none text-slate-200 tabular-nums pt-0.5 transition-colors group-hover:text-primary/40 group-open:text-primary">
              {String(item.number).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                {item.q}
              </h3>
              <p className="text-sm md:text-[0.9375rem] text-slate-500 mt-1.5 group-open:hidden">{item.lead}</p>
            </div>
            <span className="w-9 h-9 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-primary group-open:to-blue-600 group-open:border-transparent group-open:text-white group-open:shadow-lg group-open:shadow-primary/30">
              <Plus className="w-4 h-4" />
            </span>
          </summary>
          <div className="px-6 md:px-8 pb-7 md:pl-[5.5rem] text-slate-600 leading-relaxed space-y-4">
            <p className="text-lg md:text-xl font-semibold text-slate-900 leading-snug">{item.lead}</p>
            <p>{item.a}</p>
            {item.list && (
              <ul className="grid gap-2">
                {item.list.map((point) => (
                  <li key={point} className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.after && <p>{item.after}</p>}
          </div>
        </details>
      ))}
    </div>
  );
};

export default FaqList;
