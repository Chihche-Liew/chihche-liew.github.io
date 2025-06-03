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

### 3. Image-Text Inference with LLaVA
**Summary**: Multimodal inference tool using LLaVA v1.5 for interpreting image + prompt input. [repository here](https://github.com/Chihche-Liew/Image-Text-Inference-LLaVA)  

**Features**:

- Supports remote/local image input  
- Runs efficiently on GPU with `float16`  
- Returns vision-language model responses

---

### 4. RavenPack News Processor

**Summary**: A Python pipeline designed for processing RavenPack news event data and extract events with focused keywords retrieved from WRDS with acceleration using Polars and DuckDB.

**Features**:

- Supports both unigram and bigram keyword filtering
- Replaces pandas operations with polars and duckdb for better performance
- Outputs to `.parquet` files with compression for easy downstream processing

---

### 5. FF Industry Parser

**Summary**: A lightweight parser for mapping SIC codes to Fama-French industry categories from structured `.txt` definitions. [repository here](https://github.com/Chihche-Liew/FF-Industry-Parser)  

**Features**:

- Parses 49-industry (or 12) structure  
- No external dependencies (pure `re` module) 

---

### 6. Replication and Extension of Donelson et al. (2011, TAR)

**Summary**: This project replicates and extends the empirical results of Donelson et al. (2011) using Compustat data from WRDS. The replication not only validates the original study (1967-2005) but also extends the analysis to more recent periods (up to 2023) to test the robustness of the findings.

**Features**:

- Calculation of key financial ratios (e.g., revenue, expense, earnings per asset) and rolling averages/volatility metrics.
- Fully replicates Donelson et al.’s original Table 1 and Table 2 (1967-2005) and extends the analysis to 2006-2023 and other split years (e.g., 1995, 2012-2023) to assess robustness.

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