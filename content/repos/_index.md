---
title: "Research Toolkits"
type: page
layout: page
---

## Python

### 1. [WRDS Event Study (Polars + DuckDB)](https://github.com/Chihche-Liew/Event-Study-Polars)
**Summary**: A high-performance event study framework replicating the WRDS Python event study app, enhanced with Polars and DuckDB for ~240x acceleration.  

**Features**:

- Abnormal return models: market-adjusted, CAPM, FF3, Carhart4  
- Supports `CAR`, `BHAR`, `abret`, flexible event windows  
- Efficient processing of large-scale samples

---

### 2. [GPT-Disclosure Analyzer](https://github.com/Chihche-Liew/GPT-Disclosure-Analyzer)
**Summary**: A modular pipeline for analyzing SEC filings using OpenAI GPT models, based on keywords and item extraction.  

**Features**:

- Automatic extraction of selected SEC items (e.g., Item 1, 7 of 10-K)  
- Filtering with custom keyword lists (supports unigrams and bigrams)  
- Batch annotation via OpenAI Chat API

---

### 3. [Image-Text Inference with LLaVA](https://github.com/Chihche-Liew/Image-Text-Inference-LLaVA)
**Summary**: Multimodal inference tool using LLaVA v1.5 for interpreting image + prompt input.  

**Features**:

- Supports remote/local image input  
- Runs efficiently on GPU with `float16`  
- Returns vision-language model responses

---

### 4. [RavenPack News Processor](https://github.com/Chihche-Liew/RavenPack-News-Processor)

**Summary**: A Python pipeline designed for processing RavenPack news event data and extract events with focused keywords retrieved from WRDS with acceleration using Polars and DuckDB. 

**Features**:

- Supports both unigram and bigram keyword filtering
- Replaces pandas operations with polars and duckdb for better performance
- Outputs to `.parquet` files with compression for easy downstream processing

---

### 5. [FF Industry Parser](https://github.com/Chihche-Liew/FF-Industry-Parser)

**Summary**: A lightweight parser for mapping SIC codes to Fama-French industry categories from structured `.txt` definitions.  

**Features**:

- Parses 49-industry (or 12) structure  
- No external dependencies (pure `re` module) 

---

### 6. [Replication and Extension of Donelson et al. (2011, TAR)](https://github.com/Chihche-Liew/Changes-over-Time-Replication-and-Extension)

**Summary**: This project replicates and extends the empirical results of Donelson et al. (2011) using Compustat data from WRDS. The replication not only validates the original study (1967-2005) but also extends the analysis to more recent periods (up to 2023) to test the robustness of the findings. 

**Features**:

- Calculation of key financial ratios (e.g., revenue, expense, earnings per asset) and rolling averages/volatility metrics.
- Fully replicates Donelson et al.’s original Table 1 and Table 2 (1967-2005) and extends the analysis to 2006-2023 and other split years (e.g., 1995, 2012-2023) to assess robustness.

---

### 7. [Replication of Daniel et al. (1997, JF)](https://github.com/Chihche-Liew/DGTW-Portfolio)

**Summary**: Replication package for Daniel, Grinblatt, Titman & Wermers (1997) "Measuring Mutual Fund Performance with Characteristic-Based Benchmarks" from Journal of Finance. Constructs 125 characteristic-sorted portfolios (5×5×5) using size, book-to-market, and momentum quintiles for precise mutual fund performance evaluation. 

**Features**:

- Constructs 125 value-weighted characteristic-sorted portfolios using NYSE breakpoints for size, book-to-market, and momentum quintiles
- Implements proper momentum calculation (12-2 month window) with minimum 8 valid return observations and handles multiple share classes
- Outputs portfolio returns and stock-benchmark mapping files for precise mutual fund performance evaluation against characteristic-matched benchmarks 

---

### 8. [Replication of Call et al. (2023, RAST)](https://github.com/Chihche-Liew/Tone-Analyst-Manager)

**Summary**: Replication package for "Managers' use of humor on public earnings conference calls" (Call et al., 2023, Review of Accounting Studies). Reproduces tone calculation methodology using Capital IQ transcripts and Loughran-McDonald sentiment dictionary to analyze manager and analyst sentiment on earnings calls. 

**Features**:

- Separates manager statements (type 4) and analyst statements (type 3) from earnings call transcripts with automated text preprocessing
- Applies Loughran-McDonald sentiment dictionary to compute tone scores as (positive_words - negative_words) / total_sentiment_words
- Outputs transcript-level tone measures (`tone_manager` and `tone_analyst`) for comprehensive earnings call sentiment analysis

## R

### 1. [Replication and Extension of García et al. (2023, JFE)](https://github.com/Chihche-Liew/The-Color-of-Finance-Words-Replication-and-Optimization)

**Project**: Joint work with Miao Liu and Yang Cao at Boston College. This project replicates and extends the methodology from García et al. (2023, JFE) using updated conversation datasets and customized NLP models. 

**Features**:

- Full replication of original García et al. variable construction pipeline  
- Includes original code modules from García et al.’s dataset [Source](https://leeds-faculty.colorado.edu/garcia/data.html)  
- `FineTuneBert.py`: fine-tunes Google BERT for real-time earnings call prediction  
- `BertShap.py`: interprets BERT attention via Shapley values

---

## SAS 

### 1. [High-Frequency Event Study TAQ](https://github.com/Chihche-Liew/High-Frequency-Event-Study-TAQ)

**Summary**: It systematically extracts short-window trading activity and quote information around event timestamps to facilitate detailed market microstructure analysis. 

**Features**:

- Customizable event input with your own event dataset
- Automatically detects and matches available TAQ data files by date