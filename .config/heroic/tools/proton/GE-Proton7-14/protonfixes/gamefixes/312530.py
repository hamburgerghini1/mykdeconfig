""" Game fix for Duck Game
"""
#pylint: disable=C0103

from protonfixes import util

def main():
    """ Changes the proton argument from the launcher to the game
    """

    # Replace launcher with game exe in proton arguments
    util.append_argument('-linux')
