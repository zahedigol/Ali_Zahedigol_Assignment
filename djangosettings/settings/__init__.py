import pathlib
import re
import os


def read_env():
    """Pulled from Honcho code with minor updates, reads local default
    environment variables from a .env file located in the project root
    directory.
    """
    try:
        content = pathlib.Path('.env').read_text()
    except IOError:
        content = ''

    for line in content.splitlines():
        if m1 := re.match(r'\A([A-Za-z_0-9]+)=(.*)\Z', line):
            key, val = m1[1], m1[2]

            if m2 := re.match(r"\A'(.*)'\Z", val):
                val = m2[1]
            if m3 := re.match(r'\A"(.*)"\Z', val):
                val = re.sub(r'\\(.)', r'\1', m3[1])
            os.environ.setdefault(key, val)


read_env()

from .base import *

try:
    from .local_settings import *

except:
    from .servers.share_servers import *
