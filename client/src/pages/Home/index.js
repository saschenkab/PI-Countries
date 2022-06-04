import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards";
import Header from "../../components/headerBar";
import {
  getActivitiesAction,
  getCountriesAction,
} from "../../redux/actions/index";
import styled from "styled-components";
import Filters from "../../components/filters";
import { getActivities } from "../../redux/utils/endpoints";
import Order from "../../components/order";
import Pagination from "../../components/pagination";

const Body = styled.div`
  display: flex;
  flex-flow: row;
  oadding: 40px;
`;

const Countries = styled.div`
  width: 80%;
`;

const Home = () => {
  const dispatch = useDispatch();
  const countriesFiltered = useSelector((state) => state.countriesFiltered);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const paginate = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return countriesFiltered.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, countriesFiltered]);

  useEffect(() => {
    setCurrentPage(1);
  }, [countriesFiltered]);

  useEffect(() => {
    dispatch(getCountriesAction());
    dispatch(getActivitiesAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Order />
      <Body>
        <Filters>
          <h2>Filters</h2>
          <p>
            <input type="checkbox" />
            <label>All</label>
          </p>
        </Filters>
        <Countries>
          <Cards countries={paginate} />
          <Pagination
            currentPage={currentPage}
            totalCount={countriesFiltered.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Countries>
      </Body>
    </>
  );
};

export default Home;
