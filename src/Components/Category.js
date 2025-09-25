import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Roll } from 'react-awesome-reveal';

const Category = ({ filteration, AllCategories }) => {
  // To Filter Categories
  const onFilter = (cat) => {
    filteration(cat);
  };

  return (
    <Row>
      <Col
        sm='12'
        className='d-flex justify-content-center text-center mt-4 flex-wrap'>
        <Roll>
          {AllCategories && AllCategories.length > 0 ? (
            AllCategories.map((cat, idx) => (
              <div key={idx} className='category-item m-2'>
                <span
                  onClick={() => onFilter(cat)}
                  style={{ cursor: 'pointer' }}
                  className='category-span'>
                  {cat}
                </span>
              </div>
            ))
          ) : (
            <h4>لا يوجد أصناف</h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
