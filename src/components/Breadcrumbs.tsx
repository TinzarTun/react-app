export default function Breadcrumbs({ id }: { id: string | undefined }) {
  return (
    <nav className="text-sm mb-6">
      <ol className="flex items-center space-x-2">
        <li className="mb-2 leading-7">
          <a href="index.html" className="text-gray-500 hover:text-emerald-600">
            Home
          </a>
        </li>
        <li className="text-gray-500">/</li>
        <li className="mb-2 leading-7">
          <a href="#" className="text-gray-500 hover:text-emerald-600">
            Blog
          </a>
        </li>
        <li className="text-gray-500">/</li>
        <li className="mb-2 leading-7">
          <a href="#" className="text-gray-500 hover:text-emerald-600">
            Technology
          </a>
        </li>
        <li className="text-gray-500">/</li>
        <li className="mb-2 leading-7">
          <a href="#" className="text-gray-500 hover:text-emerald-600">
            {id}
          </a>
        </li>
        <li className="text-gray-500">/</li>
        <li className="text-gray-800 font-medium">
          The Future of Web Development
        </li>
      </ol>
    </nav>
  );
}
