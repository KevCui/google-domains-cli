# translate-cli

> Check domain availability using Google Domains in your terminal.

## Table of Contents

- [Dependency](#dependency)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Examples](#examples)

## Dependency

- Chrome/Chromium
- [puppeteer](https://github.com/puppeteer/puppeteer/)

## Installation

```bash
$ npm i puppeteer
```

## Configuration

- Set environment variable `CHROME` with Chrome/Chromium path in shell rc file:

```bash
export CHROME=<chromium_path>
```

## Usage

```
$ ./checkGoogleDomains.js <domain>
```

### Examples

```bash
$ ./checkGoogleDomains.js 'google.domains'
Registered

$ ./checkGoogleDomains.js 'google.damn'
This ending .DAMN doesn't exist

$ ./checkGoogleDomains.js 'zzz'
Unknown

$ ./checkGoogleDomains.js 'zzz1zzz.xyz'
Available
```

---

<a href="https://www.buymeacoffee.com/kevcui" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>
