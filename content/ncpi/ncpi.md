---
draft: false
---

# NIH Cloud Platform Interoperability Effort
 Driving interoperability between [AnVIL](https://anvilproject.org), [BioData Catalyst](https://biodatacatalyst.nhlbi.nih.gov), [CRDC](https://datacommons.cancer.gov/) and the  [Kids First DRC](https://kidsfirstdrc.org).

## Overview

The NIH Cloud Platform Interoperability Effort (NCPI) was created as an outcome of the NIH Workshop on Cloud-Based Platforms Interoperability held at RENCI on October 3-4th, 2019.
 
### Mission
 The NCPI's mission is to drive interoperability among the genomic analysis platforms established by the NCI, NHLBI, NHGRI and the NIH Common Fund.
  
 
### Team 
This new interoperability effort is a collaboration between NIH representatives, platform team members and researchers running cross-platform driver projects to inform and validate the interoperability approaches.

### Timeline 

The NCPI will demonstrate progress based on driver research projects every six months.
 
## Working Towards a Federated Data Ecosystem

 <hero small>The NCPI will establish and implement guidelines and technical standards to empower end-user analyses across participating platforms and facilitate the realization of a trans-NIH, federated  data ecosystem.
 </hero>


 

### Participating Genomic Data Commons


 ![HERO](./_images/ncpi-cloud.png)

The following genomic data commons platforms are participating in the NCPI effort:

[**AnVIL**](/) - The NHGRI Genomic Data Science The Genomic Analysis, Visualization, and Informatics Lab-space, or AnVIL, is NHGRI's genomic data resource that leverages a cloud-based infrastructure for democratizing genomic data access, sharing and computing across large genomic, and genomic-related data sets. [[more]](/ncpi/platforms#analysis-visualization-and-informatics-lab-space-anvil)

[**BioData Catalyst**](https://biodatacatalyst.nhlbi.nih.gov/) - NHLBI BioData Catalyst is a cloud-based platform providing tools, applications, and workflows in secure workspaces. By increasing access to NHLBI datasets and innovative data analysis capabilities, BioData Catalyst accelerates efficient biomedical research that drives discovery and scientific advancement, leading to novel diagnostic tools, therapeutics, and prevention strategies for heart, lung, blood, and sleep disorders. [[more]](/ncpi/platforms#biodata-catalyst)

[**Cancer Research Data Commons**](https://datacommons.cancer.gov/) - The goal of the National Cancer Institute’s Cancer Research Data Commons (CRDC) is to empower researchers to accelerate data-driven scientific discovery by connecting diverse datasets with analytical tools in the cloud. The CRDC is built upon an expandable data science infrastructure that provides secure access to many different data across scientific domains via Data Commons Framework. [[more]](/ncpi/platforms#cancer-research-data-commons-crdc)


[**Kids First Data Resource Center**](https://kidsfirstdrc.org/)  -  The NIH Common Fund's Gabriella Miller Kids First Pediatric Research Program’s (“Kids First”) vision is to “alleviate suffering from childhood cancer and structural birth defects by fostering collaborative research to uncover the etiology of these diseases and by supporting data sharing within the pediatric research community.”  [[more]](/ncpi/platforms#kids-first-data-resource-center)


## Our Initial Focus


The NCPI has intentionally constrained the problems we are addressing to those achievable in the near term  which can demonstrate value to researchers by enabling specific research projects.


### To Start, We are Focusing on Cross-Platform Data Exchange

The NCPI is currently working to enable the following researcher user stories:


As a researcher I would like to:

1. Use datasets form other platforms as GWAS cases so I can increase the power of my analysis.
1. Use datasets form other platforms as GWAS controls so I can run analyses that were previously blocked by lack of controls.
1. Use an analysis tool unique to a platform other than the one hosting my cohort.
1. Use datasets from other platforms with a different data type (e.g. expression vs WES).

<hero small> Each of these user stories are enabled when a researcher can easily find data in one platform and export it to any other platform in the data ecosystem.</hero>

To enable the initial researcher user stories, we are focused on delivering the following system features:

**Generic Search Results Hand-off** -   We are working to establish a generic and universal hand-off mechanism so data portal users can further analyze search results on any analysis platform that supports the format.  This will allow data portals to develop and maintain a single “export mechanism” which would be available to any analysis platforms that invested in supporting the standard format. 

Importantly, this gives researchers greater freedom in how and where they compute.

By improving the hand-off of search results from portals to workspace environments through standardization, we will enable researchers to query on multiple portals and aggregate their search results to a common cloud workspace of their choosing in order to perform an analysis. 
 
 For example, this will let a researcher search for Kids First and TOPMed data on their respective portals and then take the results to the Terra environment where they can perform a joint analysis on these data.
  
  Right now, this simple scenario has limited or no support across portals and analysis workspaces, making this type of joint analysis impossible for most users.

**Single Sign On Pilot** - We will pilot a single sign on event authentication/authorization workflow through NIH’s RAS effort.


## Driver Projects Help Us Target Researcher Needs

 <hero small> This interoperability effort is  guided by several research projects identified by the research community. Feedback from the driver projects is used to aid discovery of detailed interoperability requirements and validate the utility of the developed interoperability features. </hero>
 
### Our First Driver Projects Make Use of Cross-Platform Data Exchange
 
 1. [BioData Catalyst + Kids First DRC](/ncpi/research-use-cases#1---nhlbi-biodata-catalyst--kids-first-drc) - Develop a more accurate pipeline to detect de novo mutations in family trios by utilizing the consistent calls and other graph-related information produced by the SBG graph tools in the PCGC pipeline.
 
 1. [BioData Catalyst + Kids First DRC](/ncpi/research-use-cases#2---nhlbi-biodata-catalyst--kids-first-drc) -  Help the scientific community to better understand cardiogenesis and to better assess risk of disease. Access to this whole genome sequence data will facilitate our work
 
 1. [BioData Catalyst + Kids First DRC](/ncpi/research-use-cases#3---nhlbi-biodata-catalyst--kids-first-drc) - A comparison of cardiac-associated genes from BioData Catalyst's TOPMed Vanderbilt atrial fibrillation and Kids First congenital heart defects cohorts.

 1. [AnVIL + Kids First DRC + NHLBI BioData Catalyst](/ncpi/research-use-cases#4---nhgri-anvil--kids-first-drc--nhlbi-biodata-catalyst) - Leveraging cross platform datasets as controls for analysis.
 
 1. [CRDC +  AnVIL](/ncpi/research-use-cases#5----nci-crdc--nhgri-anvil) - Find a path to connect the GTEx data on the AnVIL platform to further processing and also combination with a prior analysis on the CRDC. This “normals” use case is a frequent request from our users, so finding a solution would be extremely valuable for a large number of cancer researchers
 
 1. [CRDC +  AnVIL](/ncpi/research-use-cases#6-nci-crdc--nhgri-anvil) - A comparison of transcriptome variation between tumors derived from male and female cancer patients.

## Working Groups

The NCPI's working groups and collaborating projects along with their areas of focus are listed below.


[Community Governance Working Group](/ncpi/working-groups#community-governance-working-group) - Establish a set of [principles](/ncpi/interoperating-principles) for promoting interoperability across multiple platforms to remove operational barriers to trans-platform data sharing.

[Coordination Working Group](/ncpi/working-groups#coordination-working-group) - Coordinate discourse, collaboration, and meetings between the working groups of NCPI.

[FHIR Working Group](/ncpi/working-groups#fhir-working-group) - Assess the potential of FHIR resources to model and share complex clinical and phenotypic data.

[NIH CIT  Researcher Auth Service (RAS) Project](ncpi/working-groups#nih-cit-researcher-auth-service-project) - Streamline access to multiple NIH data resources by enabling single sign-on and modernized communication of dbGaP approval information.

[Outreach and Training Working Group](/ncpi/working-groups#outreach-and-training-working-group) - Create a public knowledge base with training materials and a cloud cost guide to educate researchers on the research use cases enabled by interoperable cloud based data commons. 

[Systems Interoperation Working Group](ncpi/working-groups#nih-systems-interoperation-working-group) - Test and implement technical standards (e.g. GA4GH APIs)  for data exchange and demonstrate their effectiveness by enabling key cross-platform research use cases. 


## Progress Updates
The NCPI will give progress updates every six months. Summaries of past progress updates are listed below:

1. [April 16, 2020 -  NIH Interoperability Workshop (Remote)](/ncpi/progress-updates/ncpi-progress-update-2020-04-16)