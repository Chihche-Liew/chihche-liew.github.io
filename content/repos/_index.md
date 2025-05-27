---
title: "Research Toolkits"
type: page
layout: page
---

## Python

### 1. WRDS Event Study (Polars + DuckDB)
**Summary**: A high-performance event study framework replicating the WRDS Python event study app, enhanced with Polars and DuckDB for ~240x acceleration. [repository here](https://github.com/Chihche-Liew/Event-Study-Polars)  

**Features**:

- Abnormal return models: market-adjusted, CAPM, FF3, Carhart4  
- Supports `CAR`, `BHAR`, `abret`, flexible event windows  
- Efficient processing of large-scale samples

---

### 2. GPT-Disclosure Analyzer
**Summary**: A modular pipeline for analyzing SEC filings using OpenAI GPT models, based on keywords and item extraction. [repository here](https://github.com/Chihche-Liew/GPT-Disclosure-Analyzer)  

**Features**:

- Automatic extraction of selected SEC items (e.g., Item 1, 7 of 10-K)  
- Filtering with custom keyword lists (supports unigrams and bigrams)  
- Batch annotation via OpenAI Chat API

---

### 3. EDGAR Server Log Data Processor

**Summary**: A Python utility to download, preprocess, and merge U.S. SEC EDGAR server logs and master index files. Designed for tracking access activity to filings, including support for IP-based filtering. [repository here](https://github.com/Chihche-Liew/EDGAR-Server-Log-Data-Processor) 

**Features**:

- Downloads daily EDGAR server logs and quarterly master index files  
- Filters logs to remove bots, index page hits, bad responses, and malformed entries  
- Optional filtering by IP segments
- Aggregates request counts by file type: `htm`, `txt`, `xbrl`, `other`  
- Merges logs with filing metadata: CIK, form type, filing date

---

### 4. Trading Activity Analyzer

**Summary**: A WRDS-based Python class to extract, test, and visualize trading volume around firm-specific event dates. This tool supports abnormal activity diagnostics before launching full event studies, and can identify non-normal volume patterns. [repository here](https://github.com/Chihche-Liew/Trading-Activity-Analyzer)

**Features**:

- Adjustable event window (e.g., -5 to +5 days)
- Supports three normality tests:  
  - Jarque-Bera  
  - Shapiro-Wilk  
  - Anderson-Darling  
- Generates aligned volume bar plots with event day highlighted

---

### 5. Image-Text Inference with LLaVA
**Summary**: Multimodal inference tool using LLaVA v1.5 for interpreting image + prompt input. [repository here](https://github.com/Chihche-Liew/Image-Text-Inference-LLaVA)  

**Features**:

- Supports remote/local image input  
- Runs efficiently on GPU with `float16`  
- Returns vision-language model responses

---

### 6. FF Industry Parser
**Summary**: A lightweight parser for mapping SIC codes to Fama-French industry categories from structured `.txt` definitions. [repository here](https://github.com/Chihche-Liew/FF-Industry-Parser)  

**Features**:

- Parses 49-industry (or 12) structure  
- No external dependencies (pure `re` module) 

---

## R

### 1. Replication and Extension of García et al. (2023, JFE)

**Project**: Joint work with Miao Liu and Yang Cao at Boston College. This project replicates and extends the methodology from García et al. (2023, JFE) using updated conversation datasets and customized NLP models. [repository here](https://github.com/Chihche-Liew/The-Color-of-Finance-Words-Replication-and-Optimization)

**Features**:

- Full replication of original García et al. variable construction pipeline  
- Includes original code modules from García et al.’s dataset [Source](https://leeds-faculty.colorado.edu/garcia/data.html)  
- `FineTuneBert.py`: fine-tunes Google BERT for real-time earnings call prediction  
- `BertShap.py`: interprets BERT attention via Shapley values

---

## SAS 

### 1. High-Frequency Event Study TAQ

**Summary**: It systematically extracts short-window trading activity and quote information around event timestamps to facilitate detailed market microstructure analysis. [repository here](https://github.com/Chihche-Liew/High-Frequency-Event-Study-TAQ)

**Features**:

- Customizable event input with your own event dataset
- Automatically detects and matches available TAQ data files by date