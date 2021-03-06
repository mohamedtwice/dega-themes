import React from 'react';
import { Link } from 'gatsby';
import parseDate from '../utils/parseDate';

/* 
 TODO 1. Make images optional
 TODO 2. 
 */

const Author = ({ users, categories, date }) => {
  return (
    <div className="flex flex-col justify-start items-start py-2">
      <div className="flex flex-col py-2">
        <div className="flex flex-row flex-wrap items-center">
          {users.map((user, i, arr) => (
            <React.Fragment key={i}>
              <Link to={`/users/${user.id}`} className="font-medium text-blue-500 text-lg px-1">
                {user.first_name + ' ' + user.last_name}
              </Link>
              {arr.length - i > 1 && ','}
            </React.Fragment>
          ))}
          <span className="font-medium text-lg ">in</span>
          {categories.map((category, i, arr) => (
            <React.Fragment key={i}>
              <Link
                to={`/categories/${category.slug}`}
                className="font-medium text-blue-500 text-lg px-1"
              >
                {category.name}
              </Link>
              {arr.length - i > 1 && ', '}
            </React.Fragment>
          ))}
        </div>
        <span className="text-gray-600 text-lg">{parseDate(date)}</span>
      </div>
    </div>
  );
};

export default Author;
