import { Search } from './search';

export function BlogHeader() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-2 text-gray-600">Latest posts about wavy hair care and styling</p>
        </div>
        <Search />
      </div>
    </div>
  );
}