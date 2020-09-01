/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - data dashboard component.
 * Use of this component within markdown is possible.
 * Use the tag <data-dashboard-ncpi></data-dashboard-ncpi>.
 */

// Core dependencies
import React from "react";

// App dependencies
import DataSearch from "../data-search/data-search";
import DataStudiesNCPI from "../data-studies-ncpi/data-studies-ncpi";
import {DashboardNCPIStaticQuery} from "../../hooks/dashboard-ncpi-query";
import ProviderDashboardFilter from "../provider-dashboard-filter/provider-dashboard-filter";
import * as DashboardSearchService from "../../utils/dashboard/dashboard-search.service";

// Template variables
const DASHBOARD_INDEX = "/dashboard-index-ncpi.json";

function DataDashboardNCPI() {

    const lunrIndexRefField = "dbGapIdAccession";
    const studiesQuery = DashboardNCPIStaticQuery();
    const searchFacets = DashboardSearchService.DashboardSearchFacetsNCPI;
    const facetsByTerm = DashboardSearchService.getDashboardFacetsByTerm(studiesQuery, searchFacets);
    const checkboxGroups = DashboardSearchService.buildDashboardCheckboxesByFacet(facetsByTerm, searchFacets);
    const setOfSearchGroups = DashboardSearchService.getDashboardSetOfSearchGroups(searchFacets);
    const setOfTerms = DashboardSearchService.getDashboardSetOfTerms(facetsByTerm);

    return (
        <ProviderDashboardFilter
            checkboxGroups={checkboxGroups}
            dashboardEntities={studiesQuery}
            dashboardIndex={DASHBOARD_INDEX}
            facetsByTerm={facetsByTerm}
            resultKey={lunrIndexRefField}
            setOfSearchGroups={setOfSearchGroups}
            setOfTerms={setOfTerms}>
            <DataSearch/>
            <DataStudiesNCPI/>
        </ProviderDashboardFilter>
    )
}

export default DataDashboardNCPI;
