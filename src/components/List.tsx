import { createResource } from 'solid-js';
import { fetchWishilst } from '../data/baserow';
import './List.css';

export const List = () => {
  const [brData] = createResource(fetchWishilst);

  return (
    <ul class="">
      { brData.loading && <div class="text-xl py-2">Loading...</div> }
      { brData()?.results.map((item: any) => (
        <li class="text-xl py-2">
          <a href={item.URL} class="text-blue-700 underline">{item.Name}</a>
        </li>
      )) }
    </ul>
  );
}