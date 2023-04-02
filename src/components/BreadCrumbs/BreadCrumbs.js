import React, { Fragment, useContext } from "react";
import { useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRight.svg";
import { ROUTE_NAMES } from "../../Router/routerNames";
import { BREADCRUMB } from "./config/BreadCrumbsConfig";
import { Context } from "../../config/context";
import { BreadCrumb, BreadCrumbsWrapper, Container, Link } from "./styles";

export const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(BREADCRUMB, { disableDefaults: true });
  const { pathname } = useLocation();
  const { mobile } = useContext(Context);

  const mainPage = pathname === ROUTE_NAMES.HOME;

  return (
    <>
      {mainPage || mobile ? null : (
        <Container>
          <BreadCrumbsWrapper>
            {breadcrumbs.map(({ match, breadcrumb }, index, array) => {
              return index === array.length - 1 ? (
                <BreadCrumb key={match.pathname}>{breadcrumb}</BreadCrumb>
              ) : (
                <Fragment key={match.pathname}>
                  <Link
                    to={
                      match.route.path === ROUTE_NAMES.PRODUCTS_CATEGORIES
                        ? ROUTE_NAMES.ALL_PRODUCTS
                        : match.pathname
                    }
                  >
                    {breadcrumb}
                  </Link>
                  <ArrowRight />
                </Fragment>
              );
            })}
          </BreadCrumbsWrapper>
        </Container>
      )}
    </>
  );
};
