/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - ncpi data studies component.
 */

// Core dependencies
import React, {useContext} from "react";

// App dependencies
import DashboardFilterContext from "../context/dashboard-filter-context";
import DataTable from "../data-table/data-table";

// Template variables
const TABLE_HEADERS_WORKSPACES_BY_STUDY = ["platform", "gapId", "studyName", "diseases"];

class DataStudiesNCPI extends React.Component {

    render() {
        const {studies} = this.props;
        return (
            <>
            <h2>Search Results</h2>
            <DataTable studies tableHeaders={TABLE_HEADERS_WORKSPACES_BY_STUDY} tableRows={studies}/>
            </>
        );
    }
}

export default () => {

    /* Grab the entities. */
    const searching = useContext(DashboardFilterContext),
        {entities} = searching || {};

    const showStudies = entities.length > 0;

    return (
        showStudies ? <DataStudiesNCPI studies={entities}/> : null
    )
}
