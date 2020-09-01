/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Service for dashboard search index fields.
 */

/**
 * Find the study for the specified dbGapIdAccession.
 *
 * @param studies
 * @param dbGapIdAccession
 * @returns {{}}
 */
const findStudy = function findStudy(studies, dbGapIdAccession) {

    if ( studies && dbGapIdAccession ) {

        return studies.find(study => study.dbGapIdAccession === dbGapIdAccession);
    }

    return {};
};

/**
 * Return the access type for the specified workspace.
 * Indexes the facet "accessType" with unique term values.
 *
 * - "controlled" for "Controlled Access" when study exists
 * - "open" for "Open Access" when access: "Public"
 * - "consortium" for "Consortium Access" when access: "Private" (and without study)
 *
 * @param workspace
 * @param study
 * @returns {*}
 */
const getIndexFieldAccessType = function getIndexFieldAccessType(workspace, study) {

    const studyExits = Object.keys(study).length > 0;

    /* "researcher" - workspace with a study. */
    if ( studyExits ) {

        return "controlled";
    }

    /* "consortia" - private workspace. */
    if ( workspace.access === "Private" ) {

        return "consortium";
    }

    /* "public" - public workspace. */
    if ( workspace.access === "Public" ) {

        return "open";
    }

    return ""
};

/**
 * Returns the consortium.
 * Indexes the consortium, facilitating partial searches within the consortium display name.
 * Handles special case "1000 genomes", where "1000" may also be represented by "thousand".
 *
 * @param consortium
 * @returns {string}
 */
const getIndexFieldConsortiumName = function getIndexFieldConsortiumName(consortium) {

    if ( consortium ) {

        /* Handles consortium "1000 genomes". */
        if (consortium.toLowerCase().includes("1000 genomes")) {

            return `${consortium} thousand`;
        }

        return consortium;
    }

    return "";
};

/**
 * Returns the data types as a string joined by a space.
 * Indexes data types, facilitating varying text searches for each data type.
 * i.e. indexes data type for the FE data type display name e.g. "WGS"
 * as well as the long-hand version of the data type e.g. "whole genome".
 *
 * @param dataTypes
 * @returns {string}
 */
const getIndexFieldDataTypes = function getIndexFieldDataTypes(dataTypes) {

    if ( dataTypes ) {

        return dataTypes.reduce((acc, dataType) => {

            const dataTypeStr = dataType.toLowerCase();

            /* Add dataType to accumulator. */
            acc = `${acc} ${dataTypeStr}`;

            /* Case "WGS" - add "whole genome". */
            if (dataTypeStr.includes("wgs")) {

                acc = `${acc} whole genome`;
            }

            /* Case "WES" - add "whole exome". */
            if (dataTypeStr.includes("wes")) {

                acc = `${acc} whole exome`;
            }

            /* Case "VCF" - add "variant call format". */
            if (dataTypeStr.includes("vcf")) {

                acc = `${acc} variant call format`
            }

            return acc;
        }, "");
    }

    return "";
};

/**
 * Returns the study's diseases as a concatenated string value.
 * Facilitates the indexing of an array of diseases.
 *
 * @param diseases
 * @param consortium
 * @returns {string}
 */
const getIndexFieldDiseases = function getIndexFieldDiseases(diseases, consortium = "") {

    // We currently don't have a direct mapping between diseases and workspaces. We can assume each study's diseases
    // apply to each workspace in the study, except for CMG (which we leave blank for now). Once we have direct
    // mapping between workspace and diseases, we can update this to use the workspace-specific values, including
    // for CMG.
    if ( consortium.toLowerCase() === "cmg" ) {

        return "";
    }

    if ( diseases ) {

        return diseases.join(" ");
    }

    return "";
};

/**
 * Returns the GapId's corresponding number.
 * Indexes GapId's number - strips off any prefix/suffix.
 * e.g. a GapId of "phs001395.v1.p1" would return "1395".
 *
 * @param gapId
 * @returns {string}
 */
const getIndexFieldGapNumber = function getIndexFieldGapNumber(gapId) {

    if ( gapId ) {

        return gapId.replace(/(^phs0*|\..*$)/g, "");
    }

    return "";
};

/**
 * Returns the study name without special characters.
 * Indexes the study name, facilitating partial searches within the study name.
 *
 * @param studyName
 * @returns {string}
 */
const getIndexFieldStudyName = function getIndexFieldStudyName(studyName) {

    if ( studyName ) {

        return convertToSortableValue(studyName);
    }

    return "";
};

/**
 * Returns the projectId (workspace name) without special characters e.g. "_" or "-".
 * Allows lunr to index the projectId facilitating partial searches within the projectId.
 * e.g. a search for "heart" will return the resulting workspace AnVIL_CMG_Broad_Heart_PCGC.
 *
 * @param workspaceName
 */
const getIndexFieldWorkspaceName = function getIndexFieldWorkspaceName(workspaceName) {

    if ( workspaceName ) {

        return convertToSortableValue(workspaceName);
    }

    return "";
};

/**
 * Removes characters of the specified string to be ignored during sort and returns the string converted into lower case.
 *
 * @param str
 * @returns {string}
 */
function convertToSortableValue(str) {

    const strSansNonAlpha = str.replace(/[-{()}/:_']|\s/g, " ").toLowerCase().trim();
    const strSansOpenSquare = strSansNonAlpha.replace(/[/[]/g, " ");

    return strSansOpenSquare.replace(/]/g, " ");
}

module.exports.findStudy = findStudy;
module.exports.getIndexFieldAccessType = getIndexFieldAccessType;
module.exports.getIndexFieldConsortiumName = getIndexFieldConsortiumName;
module.exports.getIndexFieldDataTypes = getIndexFieldDataTypes;
module.exports.getIndexFieldDiseases = getIndexFieldDiseases;
module.exports.getIndexFieldGapNumber = getIndexFieldGapNumber;
module.exports.getIndexFieldStudyName = getIndexFieldStudyName;
module.exports.getIndexFieldWorkspaceName = getIndexFieldWorkspaceName;
