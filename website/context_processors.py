#!/usr/bin/env python
import datetime

def default(request):
    year = str(datetime.date.today()).split('-')[0]
    return {
        'year':year,
    }