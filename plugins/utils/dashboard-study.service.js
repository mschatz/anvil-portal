/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Service for dashboard study.
 */

// Core dependencies
const path = require("path");

// App dependencies
const {buildDict, buildExchange, buildReport, getXMLUrls} = require(path.resolve(__dirname, "./dashboard-xml.service.js"));

/**
 * Returns a FE compatible model of dbGapId / dbGapIdAccession, comprising of either ID value
 * and a corresponding study url (if it exists).
 *
 * @param gapAccession
 * @param studyUrl
 * @returns {{gapIdDisplay: *, studyUrl: string}}
 */
const buildGapId = function buildGapId(gapAccession, studyUrl = "") {

    return {
        gapIdDisplay: gapAccession,
        studyUrl: studyUrl
    }
};

/**
 * Returns a FE compatible model of study exchange, subject dictionary, subject report
 * and the corresponding xml urls, for the specified dbGapIdAccession.
 * i.e. converts dbGapIdAccession study and subject XML into a FE model for dashboard studies.
 *
 * @param gapAccession
 * @returns {Promise.<{studyExchange: *, subjectDictionary: *, subjectReport: *, urls: *}>}
 */
const buildXMLStudy = async function buildXMLStudy(gapAccession) {

    /* Get the URLs for the accession. */
    const urls = await getXMLUrls(gapAccession);

    /* Get the db gap readiness dashboard details FE-model, and the studies and subject report and dictionary queries. */
    const studyExchange = await buildExchange(urls.gapExchange);
    const subjectReport = await buildReport(urls.report);
    const subjectDictionary = await buildDict(urls.dict);

    return {
        studyExchange: studyExchange,
        subjectDictionary: subjectDictionary,
        subjectReport: subjectReport,
        urls: urls
    };
};

/**
 * Returns the subject's consents specified by consentId.
 *
 * @param subjectByStudy
 * @param consentId
 * @param studyConsentGroups
 * @returns {{consents, consentsStat}}
 */
const getSubjectConsents = function getSubjectConsents(subjectByStudy, consentId, studyConsentGroups) {

    if ( subjectByStudy && subjectByStudy.variables ) {

        const variablesByStudy = subjectByStudy.variables.find(variable => variable && variable.consentsId === consentId);

        /* Build subject consents. */
        return buildSubjectConsents(variablesByStudy, studyConsentGroups);
    }
};

/**
 * Builds the subject consents model.
 *
 * @param variablesByStudy
 * @param studyConsentGroups
 * @returns {{consents, consentsStat: *}}
 */
function buildSubjectConsents(variablesByStudy, studyConsentGroups) {

    if ( variablesByStudy ) {

        /* Build the consents for the study. */
        const consents = variablesByStudy.consents.map(subjectConsent => {

            const consentCode = subjectConsent.consentCode;

            /* Find the study consent by subject consent code. */
            const studyConsent = studyConsentGroups.find(studyConsentGroup => studyConsentGroup.groupNum === consentCode);

            return {
                consentCode: consentCode,
                consentLongName: studyConsent.longName,
                consentName: subjectConsent.consentName,
                consentShortName: studyConsent.shortName,
                consentStat: subjectConsent.consentStat
            }
        });

        return {
            consents: consents,
            consentsStat: variablesByStudy.consentsStat
        }
    }
}

module.exports.buildGapId = buildGapId;
module.exports.buildXMLStudy = buildXMLStudy;
module.exports.getSubjectConsents = getSubjectConsents;
